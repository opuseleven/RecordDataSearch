import { getAllReleases } from '../services';

describe('getAllReleases service', () => {

  const testdata = require('./testdata/artistdata.json');
  const testArtist = testdata[0];
  const testReleaseList = require('./testdata/releaselist.json');

  it('returns all releases from artist', async () => {
    const releaseList = getAllReleases(testArtist);
    expect(releaseList).toBe(testReleaseList);
  })
})
