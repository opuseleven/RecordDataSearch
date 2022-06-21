import { ExtraArtist } from '../types';
import { useState, useEffect } from 'react';

interface RenderExtraArtistProps {
  extraArtist: ExtraArtist
}

const RenderExtraArtist: React.FC<RenderExtraArtistProps> = ({ extraArtist }) => {

  const [artist, setArtist] = useState(extraArtist);

  useEffect(() => {
    setArtist(extraArtist);
  }, [extraArtist])

  return (
    <div>
      <ul>
        <li><h6>{artist.role} - {artist.name}</h6></li>
      </ul>
    </div>
  )
}
export { RenderExtraArtist };
