import { ReleaseDetails } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReleaseDetails component', () => {

  const testReleases = require('./testdata/releaselist.json');

  it('Component renders', () => {
    render(<ReleaseDetails releases={testReleases} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
  })
})
