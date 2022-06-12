import { Release  } from '../types';
import { useState, useEffect } from 'react';

interface ReleaseDetailsProps {
  releases: Release[]
}

const ReleaseDetails: React.FC<ReleaseDetailsProps> = ({ releases }) => {

  const [displayedReleases, setDisplayedReleases] = useState(releases);

  useEffect(() => {
    setDisplayedReleases(releases);
  }, [releases])

  return (
    <div>
      <ul>
        {
          displayedReleases && (
            displayedReleases.map((r: Release) => (
              <li key={r.id.toString()}>
                <h4>{r.title}</h4>
                <h5>{r.artist}</h5>
                <ul>
                  <li>{r.label}</li>
                  <li>{r.year}</li>
                  <li>{r.format}</li>
                </ul>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}
export { ReleaseDetails };
