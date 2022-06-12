import { artistMatch } from '../services';

describe('artistMatch service', () => {

  const testData = require('./testdata/testresults.json');
  const searchedArtist = 'Haunted Like Human';
  const hlh = testData[1];

  it('returns the searched artist from the list', () => {
    const testArtist = artistMatch(testData, searchedArtist);
    expect(testArtist.id).toBe(7628210);
    expect(testArtist).toBe(hlh);
  })
})
