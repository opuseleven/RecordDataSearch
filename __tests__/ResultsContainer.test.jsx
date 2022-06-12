import { ResultsContainer } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResultsContainer component', () => {

  const testReleases = require('./testdata/releaselist.json');
  const testArtist = require('./testdata/artistdata.json');

  it('Component renders', () => {
    render(<ResultsContainer releases={testReleases} artist={testArtist[0]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Haunted Like Human');
  })
})
