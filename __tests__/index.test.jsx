import Home from '../pages/index';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {

  it('Page renders', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeDefined();
  })
})
