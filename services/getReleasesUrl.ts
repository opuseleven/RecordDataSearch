import { Artist } from '../types';
import axios from 'axios';

function getReleasesUrl(artist: Artist, setReleasesUrl: React.Dispatch<React.SetStateAction<string>>) {

  const url = 'https://api.discogs.com/artists/' + artist.id.toString();

  axios
    .get(url)
    .then((res) => setReleasesUrl(res.data.releases_url));
}
export { getReleasesUrl };
