import { Release, DetailedRelease } from '../types';
import { useState, useEffect } from 'react';
import { DisplayDetailedRelease } from '.';
import styles from '../styles/Components.module.css';
import axios from 'axios';

interface DisplayReleaseProps {
  release: Release,
  darkMode: boolean
}

const DisplayRelease: React.FC<DisplayReleaseProps> = ({ release, darkMode }) => {

  const [showMore, setShowMore] = useState<boolean>(false);
  const [displayedRelease, setDisplayedRelease] = useState(release);
  const [detailedRelease, setDetailedRelease] = useState<DetailedRelease>();
  const token = process.env.TOKEN;

  useEffect(() => {
    setDisplayedRelease(release);
    axios
      .request({
        url: release.resource_url,
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Discogs token=' + token
        }
      })
      .then((res) => setDetailedRelease(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [release])

  return (
    <div className={darkMode ? styles.releasecontainerdark : styles.releasecontainer}>

      <h4 className={darkMode ? styles.artisttitledark : styles.artisttitle}>
        Release: {displayedRelease.title}
      </h4>

      <h5 className={darkMode ? styles.artisttitledark : styles.artisttitle}>
        Artist(s): {displayedRelease.artist}
      </h5>

      <ul className={darkMode ? styles.detaillistdark : styles.detaillist}>

        <li className={darkMode ? styles.detaillistitemdark : styles.detaillistitem}>
          Label: {displayedRelease.label}
        </li>

        <li className={darkMode ? styles.detaillistitemdark : styles.detaillistitem}>
          Release Year: {displayedRelease.year}
        </li>

        <li className={darkMode ? styles.detaillistitemdark : styles.detaillistitem}>
          Format: {displayedRelease.format}
        </li>

        <li className={darkMode ? styles.detaillistitemdark : styles.detaillistitem}>
          <a className={darkMode ? styles.discoglinkdark : styles.discoglink} href={displayedRelease.resource_url}
            target='_blank' rel="noreferrer"
          >
            View raw data
          </a>
        </li>
      </ul>
      <button onClick={() => setShowMore(!showMore)}
        className={styles.showmorebutton}
      >
        { showMore ? 'Hide' : 'Show' } Details
      </button>

      <div className={styles.detailedreleasecontainer}>
        {
          showMore && (
            <div>
              {
                detailedRelease && (
                  <DisplayDetailedRelease detailedRelease={detailedRelease}
                    darkMode={darkMode} />
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}
export { DisplayRelease };
