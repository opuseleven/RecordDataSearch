import { Release, Artist } from '../types';
import axios from 'axios';

function getAllReleases(artist: Artist, setReleases: React.Dispatch<React.SetStateAction<Release[] | undefined>>) {

  let releasesUrl = '';
  function setReleasesUrl(s: string) {
    releasesUrl = s;
  }

  axios
    .get(artist.resource_url)
    .then((res) => setReleasesUrl(res.data.releases_url));
  axios
    .get(releasesUrl)
    .then((res) => setReleases(res.data.releases));
}
export { getAllReleases };
