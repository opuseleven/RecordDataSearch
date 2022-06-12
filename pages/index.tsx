import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { SearchBar, ResultsContainer } from '../components';

const Home: NextPage = () => {

  const [artist, setArtist] = useState<string>('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          RecordDataSearch
        </h1>

        <SearchBar />

        <ResultsContainer />

      </main>

      <footer className={styles.footer}>
        <p>Data provided by Discogs</p>
      </footer>
    </div>
  )
}

export default Home
