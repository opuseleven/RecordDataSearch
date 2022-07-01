import { ExtraArtist } from '../types';
import styles from '../styles/Components.module.css';
import { useState, useEffect } from 'react';

interface RenderExtraArtistProps {
  extraArtist: ExtraArtist,
  darkMode: boolean
}

const RenderExtraArtist: React.FC<RenderExtraArtistProps> = ({ extraArtist, darkMode }) => {

  const [artist, setArtist] = useState(extraArtist);

  useEffect(() => {
    setArtist(extraArtist);
  }, [extraArtist])

  return (
    <div>
      <ul>
        <li>
          <h6 className={darkMode ? styles.extraartistdark : styles.extraartist}>
            {artist.role} - {artist.name}
          </h6>
        </li>
      </ul>
    </div>
  )
}
export { RenderExtraArtist };
