import { RenderTrack } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderTrack component', () => {

  const testData = require('./testdata/releasedata2.json');
  const tracklist = testData.tracklist;

  it('Component renders', () => {
    render(<RenderTrack track={tracklist[1]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Ohio');
  })

  it('Component renders with extraartists prop', () => {
    render(<RenderTrack track={tracklist[2]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('City By The Sea');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('David Brock (8)');
  })
})
