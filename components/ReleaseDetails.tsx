import { Release  } from '../types';
import { useState, useEffect } from 'react';
import { ReleasesNotFoundError } from '../errors';
import axios from 'axios';

interface ReleaseDetailsProps {
  releasesUrl: string
}

const ReleaseDetails: React.FC<ReleaseDetailsProps> = ({ releasesUrl }) => {

  const [displayedReleases, setDisplayedReleases] = useState<Release[]>();

  useEffect(() => {
    try {
      axios
        .get(releasesUrl)
        .then((res) => setDisplayedReleases(res.data.releases))
    } catch(err) {
      console.log(err);
      setDisplayedReleases(ReleasesNotFoundError());
    }
  }, [releasesUrl])

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
