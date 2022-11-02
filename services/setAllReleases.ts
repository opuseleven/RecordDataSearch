import { Release } from '../types';
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

function setAllReleases(url: string, setReleases: Dispatch<SetStateAction<Release[] | undefined>>) {

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
    .then((res) => setReleases(res.data.releases));
}
export { setAllReleases };
