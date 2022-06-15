import { getReleasesUrl } from '../services';

describe('getReleasesUrl service', () => {

  const artistData = require('./testdata/artistdata.json');
  const artist = artistData[0];

  let releasesUrl = '';
  function setReleasesUrl(s) {
    releasesUrl = s;
  }

  function getReleaseUrl() {
    getReleasesUrl(artist, setReleasesUrl);
  }

  it('Retrieves releasesUrl data', async () => {
    getReleaseUrl();
    await new Promise(r => setTimeout(r, 3000));
    expect(releasesUrl).toBe('https://api.discogs.com/artists/7628210/releases')
  })
})
