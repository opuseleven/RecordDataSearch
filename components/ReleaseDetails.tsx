import { Release  } from '../types';
import { useState, useEffect } from 'react';
import { ReleasesNotFoundError } from '../errors';
import { DisplayRelease } from '.';
import axios from 'axios';

interface ReleaseDetailsProps {
  releasesUrl: string
}

const ReleaseDetails: React.FC<ReleaseDetailsProps> = ({ releasesUrl }) => {

  const [displayedReleases, setDisplayedReleases] = useState<Release[]>();
  const token = process.env.TOKEN;

  useEffect(() => {
    axios
      .request({
        url: releasesUrl,
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Discogs token=' + token
        }
      })
      .then((res) => setDisplayedReleases(res.data.releases))
      .catch((err) => {
        console.log(err);
        setDisplayedReleases(ReleasesNotFoundError());
      });
  }, [releasesUrl])

  return (
    <div>
      <ul>
        {
          displayedReleases && (
            displayedReleases.map((r: Release) => (
              <li key={r.id.toString()}>
                <DisplayRelease release={r} />
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}
export { ReleaseDetails };
