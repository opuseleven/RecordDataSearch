import { DisplayRelease } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DisplayRelease component', () => {

  const testData = require('./testdata/releaselist.json');
  const testRelease = testData[0];

  it('Component renders', () => {
    render(<DisplayRelease release={testRelease} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
    expect(screen.getByRole('list')).toBeDefined();
  })
})
