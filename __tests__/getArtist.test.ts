import { getArtist } from '../services';

describe('getArtist service', () => {

  const artist = require('./testdata/artistdata.json');

  it('Returns an artist', () => {
    const testArtist = getArtist(artist[0]);
    expect(testArtist).toHaveProperty('title');
    expect(testArtist).toHaveProperty('type');
  })
})
