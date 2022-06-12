import { SearchBar } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {

  it('Component renders', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  })
})
