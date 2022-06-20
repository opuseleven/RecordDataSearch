import { Track } from '../types';
import { RenderExtraArtist } from '.';

interface RenderTrackProps {
  track: Track
}

const RenderTrack: React.FC<RenderTrackProps> = ({ track }) => {

  const extraArtists = track.extraartists;

  return (
    <div>
      <h6>{track.position}. {track.title}</h6>
      <ul>
        <li><h6>Track length: {track.duration}</h6></li>
      </ul>
      <div>
        {
          extraArtists && (
            extraArtists.map(a => (
              <RenderExtraArtist extraArtist={a} />
            ))
          )
        }
      </div>
    </div>
  )
}
export { RenderTrack };
