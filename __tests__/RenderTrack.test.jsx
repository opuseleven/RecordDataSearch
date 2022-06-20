import { RenderTrack } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderTrack component', () => {

  const testData = require('./testdata/releasedata2.json');
  const tracklist = testData.tracklist;

  it('Component renders', () => {
    render(<RenderTrack track={tracklist[1]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('2. Ohio');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Track length: 2:57');
  })

  it('Component renders with extraartists prop', () => {
    render(<RenderTrack track={tracklist[2]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('3. City By The Sea');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Track length: 4:24');
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('Songwriter - David Brock (8)');
  })
})
