import { DisplayDetailedRelease } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DisplayDetailedRelease component', () => {

  const testData = require('./testdata/releasedata.json');

  it('Component renders', () => {
    render(<DisplayDetailedRelease detailedRelease={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
  })
})
