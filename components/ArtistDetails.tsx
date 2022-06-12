import Image from 'next/image';
import { Artist } from '../types';
import { useState, useEffect } from 'react';

interface ArtistDetailsProps {
  artist: Artist
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ artist }) => {

  const [displayedArtist, setDisplayedArtist] = useState(artist);

  useEffect(() => {
    setDisplayedArtist(artist);
  }, [artist])

  return (
    <div>
      {
        displayedArtist && (
          <div>
            <Image layout='fill' src={displayedArtist.cover_image} />
            <h3>{displayedArtist.title}</h3>
          </div>
        )
      }
    </div>
  )
}
export { ArtistDetails };
