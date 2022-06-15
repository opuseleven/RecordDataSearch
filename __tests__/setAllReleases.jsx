import { setAllReleases } from '../services';

describe('setAllReleases service', () => {

  let releases = [];
  function setReleases(arr) {
    releases = arr;
  }

  it('Retrieves releases data', async () => {
    setAllReleases('https://api.discogs.com/artists/7628210/releases', setReleases);
    await new Promise(r => setTimeout(r, 3000));
      expect(releases.length).toBe(6);
  })
})
