import { Artist } from '../types';
import styles from '../styles/Components.module.css';

interface ArtistDetailsProps {
  artist: Artist,
  darkMode: boolean
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ artist, darkMode }) => {

  return (
    <div>
      <div>
        {
          artist && (
            <div>
              <h3 className={darkMode ? styles.artisttitledark : styles.artisttitle}>
                {artist.title}
              </h3>
            </div>
          )
        }
      </div>
    </div>
  )
}
export { ArtistDetails };
