import { Release } from '../types';
import axios from 'axios';

function setAllReleases(url: string, setReleases: React.Dispatch<React.SetStateAction<Release[] | undefined>>) {
  axios
    .get(url)
    .then((res) => setReleases(res.data.releases));
}
export { setAllReleases };
