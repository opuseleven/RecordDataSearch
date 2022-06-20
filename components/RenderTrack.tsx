import { Track } from '../types';
import { RenderExtraArtist } from '.';

interface RenderTrackProps {
  track: Track
}

const RenderTrack: React.FC<RenderTrackProps> = ({ track }) => {

  const extraArtists = track.extraartists;

  return (
    <div>
      <h6>{track.title}</h6>
      <ul>
        <li>Track #: {track.position}</li>
        <li>Track length: {track.duration}</li>
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
