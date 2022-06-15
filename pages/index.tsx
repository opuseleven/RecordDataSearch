import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { SearchBar, ResultsContainer } from '../components';
import { filterByArtists, artistMatch, getReleasesUrl } from '../services';
import { Artist, Release } from '../types';
import { artistNotFoundError } from '../errors';
import axios from 'axios';

const Home: NextPage = () => {

  const [artistSearch, setArtistSearch] = useState<string>('');

  const defaultArtist = artistNotFoundError();

  const [artist, setArtist] = useState<Artist>();
  const [data, setData] = useState<[]>([]);
  const [releasesUrl, setReleasesUrl] = useState<string>('');
  const [releases, setReleases] = useState<Release[]>([]);
  const token = process.env.TOKEN;

  useEffect(() => {
if (artistSearch !== '') {
  axios
    .get('https://api.discogs.com/database/search?q=' + artistSearch + '&token=' + token)
    .then((res) => setData(res.data.results));
}
  }, [artistSearch])

  useEffect(() => {
    const artistSearches: Artist[] = filterByArtists(data);
    const artistCheck = artistMatch(artistSearches, artistSearch);
    if (artistCheck.type === 'artist') {
      getReleasesUrl(artistCheck, setReleasesUrl);
      console.log(artistCheck.title);
      setArtist(artistCheck);
    } else {
      setArtist(defaultArtist);
    }
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>RecordDataSearch</title>
        <meta name="description" content="Record data search application home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          RecordDataSearch
        </h1>

        <SearchBar setArtistSearch={setArtistSearch} />

        <div>
          {
            artist && (
              <ResultsContainer artist={artist} releasesUrl={releasesUrl}
                releases={releases} setReleases={setReleases} />
            )
          }
        </div>

      </main>

      <footer className={styles.footer}>
        <p>Data provided by Discogs</p>
      </footer>
    </div>
  )
}

export default Home
