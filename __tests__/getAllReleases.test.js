import { getAllReleases } from '../services';

describe('getAllReleases service', () => {

  const testdata = require('./testdata/artistdata.json');
  const testArtist = testdata[0];
  const testReleaseList = require('./testdata/releaselist.json');

  let releases = [];
  function setReleases(arr) {
    releases = arr;
  }

  it('returns all releases from artist', async () => {
    getAllReleases(testArtist, setReleases);
    await new Promise(r => setTimeout(r, 3000));
    expect(releases).toBe(testReleaseList);
  })
})
