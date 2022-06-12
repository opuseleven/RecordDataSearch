import { Artist } from '../types';
import { artistNotFoundError } from '../errors';

function artistMatch(artistSearches: Artist[], artistSearch: string) {
  let returnArtist: Artist = artistNotFoundError();

  for (let i = 0; i < artistSearches.length; i++) {
    if (artistSearches[i].title.toLowerCase() === artistSearch.toLowerCase()) {
      returnArtist = artistSearches[i];
      break;
    }
  }
  return returnArtist;
}
export { artistMatch };
