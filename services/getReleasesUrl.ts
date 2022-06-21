import { Artist } from '../types';
import axios from 'axios';

function getReleasesUrl(artist: Artist, setReleasesUrl: React.Dispatch<React.SetStateAction<string>>) {

  const url = 'https://api.discogs.com/artists/' + artist.id.toString();
  const token = process.env.TOKEN;

  axios
    .request({
      url: url,
      method: 'get',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Discogs token=' + token
      }
    })
    .then((res) => setReleasesUrl(res.data.releases_url))
    .catch((err) => {
      console.log(err);
    });
}
export { getReleasesUrl };
