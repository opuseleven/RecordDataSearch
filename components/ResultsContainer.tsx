import { useState, useEffect } from 'react';
import { Release, Artist } from '../types';
import { ArtistDetails, ReleaseDetails } from '../components';
import { setAllReleases } from '../services';

interface ResultsContainerProps {
  artist: Artist,
  releasesUrl: string,
  releases: Release[],
  setReleases: React.Dispatch<React.SetStateAction<Release[]>>
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ artist, releasesUrl, releases, setReleases }) => {

  const [displayedArtist, setDisplayedArtist] = useState(artist);

  useEffect(() => {
    setDisplayedArtist(artist);
    setAllReleases(releasesUrl, setReleases);
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

    </div>
  )
}
export { ResultsContainer };
