import { ReleaseDetails } from '../components';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReleaseDetails component', () => {

  const testUrl = 'https://api.discogs.com/artists/7628210/releases';

  it('Component renders', async () => {
    render(<ReleaseDetails releasesUrl={testUrl} />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 3000));
    })
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
  })
})
