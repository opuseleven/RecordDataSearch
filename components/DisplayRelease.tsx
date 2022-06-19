import { Release } from '../types';
import styles from '../styles/Components.module.css';

interface DisplayReleaseProps {
  release: Release
}

const DisplayRelease: React.FC<DisplayReleaseProps> = ({ release }) => {

  return (
    <div className={styles.releasecontainer}>
      <h4>{release.title}</h4>
      <h5>{release.artist}</h5>
      <ul className={styles.detaillist}>
        <li className={styles.detaillistitem}>{release.label}</li>
        <li className={styles.detaillistitem}>{release.year}</li>
        <li className={styles.detaillistitem}>{release.format}</li>
      </ul>
    </div>
  )
}
export { DisplayRelease };
