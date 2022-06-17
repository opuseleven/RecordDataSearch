import { Artist, Release } from '../types';

function filterByHasType(data: any): Array<Artist | Release> {
  return data.filter((a: any) => a.hasOwnProperty('type'));
}
export { filterByHasType };
