import { Track } from '../types';
import { RenderExtraArtist } from '.';
import styles from '../styles/Components.module.css';
import { useState, useEffect } from 'react';

interface RenderTrackProps {
  track: Track,
  darkMode: boolean
}

const RenderTrack: React.FC<RenderTrackProps> = ({ track, darkMode }) => {

  const [displayedTrack, setDisplayedTrack] = useState(track);
  const [extraArtists, setExtraArtists] = useState(track.extraartists);

  useEffect(() => {
    setDisplayedTrack(track);
    setExtraArtists(track.extraartists);
  }, [track])

  return (
    <div>

      <h6 className={darkMode ? styles.tracktitledark : styles.tracktitle}>
        {displayedTrack.position}. {displayedTrack.title}
      </h6>

      <ul>
        <li>
          <h6 className={darkMode ? styles.trackdetailsdark : styles.trackdetails}>
            Track length: {displayedTrack.duration}
          </h6>
        </li>
      </ul>

      <div>
        {
          extraArtists && (
            extraArtists.map(a => (
              <div key={a.id.toString()}>
                <RenderExtraArtist extraArtist={a} darkMode={darkMode} />
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}
export { RenderTrack };
