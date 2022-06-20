import { DisplayRelease } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
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

  it('DetailedRelease info is displayed on "show details" click', async () => {
    render(<DisplayRelease release={testRelease} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    await act(async () => {
      fireEvent.click(screen.getAllByRole('button')[0]);
      await new Promise((r) => setTimeout(r, 2000));
    })
    expect(screen.getAllByRole('heading')[3]).toHaveTextContent('Labels:')
  })
})
