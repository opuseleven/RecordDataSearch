import { RenderExtraArtist } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderExtraArtist component', () => {

  const testData = require('./testdata/releasedata.json');
  const extraArtists = testData.extraartists;

  it('Component renders', () => {
    render(<RenderExtraArtist extraArtist={extraArtists[2]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Mastered By - Bill Henderson');
  })
})
