import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { SearchBar, ResultsContainer, SettingsToolbar } from '../components';
import { filterByArtists, artistMatch, getReleasesUrl } from '../services';
import { Artist } from '../types';
import { artistNotFoundError, dataError } from '../errors';
import axios from 'axios';

const Home: NextPage = () => {

  const [artistSearch, setArtistSearch] = useState<string>('');

  const defaultArtist = artistNotFoundError();

  const [artist, setArtist] = useState<Artist>();
  const [data, setData] = useState<Object[]>([]);
  const [releasesUrl, setReleasesUrl] = useState<string>('');
  const token = process.env.TOKEN;
  const [darkMode, setDarkMode] = useState(true);

  async function requestArtistData(search: string) {
    await axios
      .request({
        url: 'https://api.discogs.com/database/search?q=' + search,
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Discogs token=' + token
        }
      })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
        const error = dataError();
        setData(error);
      })
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (artistSearch !== '') {
      requestArtistData(artistSearch);
      }
      return () => {
        source.cancel();
      }
    }, [artistSearch])

  useEffect(() => {
    const artistSearches: Artist[] = filterByArtists(data);
    const artistCheck = artistMatch(artistSearches, artistSearch);
    if (artistCheck.type === 'artist') {
      getReleasesUrl(artistCheck, setReleasesUrl);
      setArtist(artistCheck);
    } else if (data.length === 0) {
      setArtist(undefined);
    } else {
      setArtist(defaultArtist);
    }
  }, [data])

  return (
    <div className={darkMode ? styles.containerdark : styles.container}>
      <Head>
        <title>RecordDataSearch</title>
        <meta name="description" content="Record data search application home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={darkMode ? styles.maindark : styles.main}>

        <SettingsToolbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className={darkMode ? styles.titledark : styles.title}>
          <span>Record</span><span>Data</span><span>Search</span>
        </h1>

        <SearchBar setArtistSearch={setArtistSearch} />

        <div className={styles.infocontainer}>
          {
            !artist && (
              <h3 className={darkMode ? styles.infodark : styles.info}>
                Search by name of musical artist to see info on the artist&#39;s full discography. Spelling must be exact.
              </h3>
            )
          }
        </div>

        <div>
          {
            artist && (
              <ResultsContainer artist={artist} releasesUrl={releasesUrl}
                darkMode={darkMode} />
            )
          }
        </div>

      </main>

      <footer className={darkMode ? styles.footerdark : styles.footer}>

        <p className={darkMode ? styles.footertextdark : styles.footertext}>
          Data provided by <a href='www.discogs.com' target="_blank" rel="noreferrer">Discogs</a>
        </p>

      </footer>
    </div>
  )
}

export default Home
