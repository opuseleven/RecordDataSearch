import { ResultsContainer } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResultsContainer component', () => {

  const testReleases = require('./testdata/releaselist.json');
  const testArtist = require('./testdata/artistdata.json');

  it('Component renders', () => {
    render(<ResultsContainer artist={testArtist[0]} releasesUrl={'https://api.discogs.com/artists/7628210/releases'} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Haunted Like Human');
  })
})
