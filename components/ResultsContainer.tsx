import { useState, useEffect } from 'react';
import {  Artist } from '../types';
import { ArtistDetails, ReleaseDetails } from '../components';

interface ResultsContainerProps {
  artist: Artist,
  releasesUrl: string
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ artist, releasesUrl }) => {

  const [displayedArtist, setDisplayedArtist] = useState(artist);

  useEffect(() => {
    setDisplayedArtist(artist);
  }, [artist])

  return (
    <div>
      <div>
        {
          displayedArtist && (
            <ArtistDetails artist={displayedArtist} />
          )
        }
      </div>

      <div>
        {
          displayedArtist && (
            <ReleaseDetails releasesUrl={releasesUrl} />
          )
        }
      </div>

    </div>
  )
}
export { ResultsContainer };
