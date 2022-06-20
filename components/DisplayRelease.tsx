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
  const [detailedRelease, setDetailedRelease] = useState<DetailedRelease>();

  useEffect(() => {
    try {
      axios
        .get(release.resource_url)
        .then((res) => setDetailedRelease(res.data));
    } catch(err) {
      console.log(err);
    }
  }, [release])

  return (
    <div className={styles.releasecontainer}>
      <h4>Release: {release.title}</h4>
      <h5>Artist(s): {release.artist}</h5>
      <ul className={styles.detaillist}>
        <li className={styles.detaillistitem}>Label: {release.label}</li>
        <li className={styles.detaillistitem}>Release Year: {release.year}</li>
        <li className={styles.detaillistitem}>Format: {release.format}</li>
        <li className={styles.detaillistitem}><a>View on Discogs</a></li>
      </ul>
      <button onClick={() => setShowMore(!showMore)}
        className={styles.showmorebutton}
      >
        { showMore ? 'Hide' : 'Show' } More
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
