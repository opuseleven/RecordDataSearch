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

  const [displayedReleases, setDisplayedReleases] = useState<Release[]>();
  const [displayedArtist, setDisplayedArtist] = useState(artist);

  useEffect(() => {
    setDisplayedArtist(artist);
    setAllReleases(releasesUrl, setReleases);
  }, [artist])

  useEffect(() => {
    setDisplayedReleases(releases);
  }, [releases])

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
