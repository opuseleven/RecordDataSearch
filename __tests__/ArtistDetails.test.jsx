import { ArtistDetails } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ArtistDetails component', () => {

  const testdata = require('./testdata/artistdata.json');

  it('Comonent renders and passes data', () => {
    render(<ArtistDetails artist={testdata[0]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Haunted Like Human');
  })
})
