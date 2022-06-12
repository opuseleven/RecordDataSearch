import { useState, useEffect } from 'react';
import { Release, Artist } from '../types';
import { ArtistDetails, ReleaseDetails } from '../components';

interface ResultsContainerProps {
  releases: Release[],
  artist: Artist
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ releases, artist }) => {

  const [displayedData, setDisplayedData] = useState({ releases, artist});

  useEffect(() => {
    setDisplayedData({ releases, artist});
  }, [releases, artist])

  return (
    <div>
      <ArtistDetails artist={displayedData.artist} />
      <ReleaseDetails releases={displayedData.releases} />
    </div>
  )
}
export { ResultsContainer };
