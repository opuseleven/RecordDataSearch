import { Artist } from '../types';

interface ArtistDetailsProps {
  artist: Artist
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ artist }) => {

  return (
    <div>
      <div>
        {
          artist && (
            <div>
              <h3>{artist.title}</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}
export { ArtistDetails };
