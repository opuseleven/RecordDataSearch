import Home from '../pages/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home page', () => {

  it('Page renders', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('RecordDataSearch');
  })
})
