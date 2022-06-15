import { useState, useEffect } from 'react';
import { Release, Artist } from '../types';
import { ArtistDetails, ReleaseDetails } from '../components';
import { setAllReleases } from '../services';

interface ResultsContainerProps {
  artist: Artist,
  releasesUrl: string
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ artist, releasesUrl }) => {

  const [releases, setReleases] = useState<Release[]>();
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

      <div>
        {
          releases && (
            <ReleaseDetails releases={releases} />
          )
        }
      </div>
    </div>
  )
}
export { ResultsContainer };
