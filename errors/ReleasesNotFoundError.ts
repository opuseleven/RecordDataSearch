import { Release } from '../types';

function ReleasesNotFoundError() {
  const releaseError = {
    id: -1,
    status: 'error',
    type: 'error',
    format: '',
    label: '',
    title: 'Error: No releases found!',
    resource_url: '',
    role: '',
    artist: '',
    year: -1,
    thumb: '',
    stats: {
      community: {
        in_wantlist: -1,
        in_collection: -1
      }
    }
  }
  const errorArr: Release[] = [releaseError]
  return errorArr;
}
export { ReleasesNotFoundError };
