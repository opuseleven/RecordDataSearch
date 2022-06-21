import { Release, DetailedRelease } from '../types';
import { useState, useEffect } from 'react';
import { DisplayDetailedRelease } from '.';
import styles from '../styles/Components.module.css';
import axios from 'axios';

interface DisplayReleaseProps {
  release: Release
}

const DisplayRelease: React.FC<DisplayReleaseProps> = ({ release }) => {

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
    <div className={styles.releasecontainer}>
      <h4>Release: {displayedRelease.title}</h4>
      <h5>Artist(s): {displayedRelease.artist}</h5>
      <ul className={styles.detaillist}>
        <li className={styles.detaillistitem}>Label: {displayedRelease.label}</li>
        <li className={styles.detaillistitem}>Release Year: {displayedRelease.year}</li>
        <li className={styles.detaillistitem}>Format: {displayedRelease.format}</li>
        <li className={styles.detaillistitem}>
          <a className={styles.discoglink} href={displayedRelease.resource_url} target='_blank'>
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
                  <DisplayDetailedRelease detailedRelease={detailedRelease} />
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
