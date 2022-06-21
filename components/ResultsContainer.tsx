import { useState, useEffect } from 'react';
import {  Artist } from '../types';
import { ArtistDetails, ReleaseDetails } from '../components';

interface ResultsContainerProps {
  artist: Artist,
  releasesUrl: string
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ artist, releasesUrl }) => {

  const [displayedArtist, setDisplayedArtist] = useState(artist);
  const [url, setUrl] = useState(releasesUrl);

  useEffect(() => {
    setDisplayedArtist(artist);
  }, [artist])

  useEffect(() => {
    setUrl(releasesUrl);
  }, [releasesUrl])

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
          url && (
            <ReleaseDetails releasesUrl={url} />
          )
        }
      </div>

    </div>
  )
}
export { ResultsContainer };
