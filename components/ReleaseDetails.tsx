import { Release  } from '../types';
import Image from 'next/image';
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
              <li>
                <h4>{r.title}</h4>
                <h5>{r.artist}</h5>
                <ul>
                  <li>{r.label}</li>
                  <li>{r.year}</li>
                  <li>{r.format}</li>
                </ul>
                <Image src={r.thumb} />
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}
export { ReleaseDetails };
