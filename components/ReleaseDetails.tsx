import { Release, Pagination, defaultPagination } from '../types';
import { useState, useEffect } from 'react';
import { ReleasesNotFoundError } from '../errors';
import { DisplayRelease, ResultsPageNav } from '.';
import axios from 'axios';

interface ReleaseDetailsProps {
  releasesUrl: string
}

const ReleaseDetails: React.FC<ReleaseDetailsProps> = ({ releasesUrl }) => {

  const [displayedReleases, setDisplayedReleases] = useState<Release[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [pagination, setPagination] = useState<Pagination>(defaultPagination());
  const token = process.env.TOKEN;

  useEffect(() => {
    axios
      .request({
        url: releasesUrl + '?sort=year&sort_order=desc&per_page=5&page=' + pageNumber.toString(),
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Discogs token=' + token
        }
      })
      .then((res) => {
        setDisplayedReleases(res.data.releases)
        setPagination(res.data.pagination)
      })
      .catch((err) => {
        console.log(err);
        setDisplayedReleases(ReleasesNotFoundError());
      });
  }, [releasesUrl, pageNumber])

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
      <div>
        <ResultsPageNav page={pageNumber} setPage={setPageNumber} pagination={pagination} />
      </div>
    </div>
  )
}
export { ReleaseDetails };
