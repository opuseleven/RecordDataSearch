import { RenderExtraArtist } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderExtraArtist component', () => {

  const testData = require('./testdata/releasedata.json');
  const extraArtists = testData.extraartists;

  it('Component renders', () => {
    render(<RenderExtraArtist extraArtist={extraArtists[2]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Bill Henderson');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Mastered By');
  })
})
