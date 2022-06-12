import { Release, Artist } from '../types';
import axios from 'axios';

function getAllReleases(artist: Artist): Release[] {
  
  let releaseArr: Release[] = [];
  function setReleaseArr(arr: Release[]) {
    releaseArr = arr;
  }
  let releasesUrl = '';
  function setReleasesUrl(s: string) {
    releasesUrl = s;
  }


  axios
    .get(artist.resource_url)
    .then((res) => setReleasesUrl(res.data.releases_url));
  axios
    .get(releasesUrl)
    .then((res) => setReleaseArr(res.data.releases));

  return releaseArr;
}
export { getAllReleases };
