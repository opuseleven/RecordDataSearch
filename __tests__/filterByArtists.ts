import { filterByArtists } from '../services';

describe('filterByArtists service', () => {

  const testData = require('./testdata/testresults.json');

  it('Filters out everything but artist results', () => {
    const artists = filterByArtists(testData);
    expect(artists[0]['type']).toBe('artist');
  })
})
