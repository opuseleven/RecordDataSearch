import { ResultsPageNav } from '../components';
import { defaultPagination } from '../types';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResultsPageNav component', () => {

  let page = 1;
  function setPage(n) {
    page = n;
  }

  it('Component renders', () => {
    render(<ResultsPageNav page={page} setPage={setPage} pagination={defaultPagination()} />);
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  })

  it('UI function to update page state var', async () => {
    const testPagination = {
      page: 1,
      pages: 4,
      per_page: 5,
      item: 19,
      urls: {
        last: '',
        next: ''
      }
    }
    render(<ResultsPageNav page={page} setPage={setPage} pagination={testPagination} />);
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    expect(screen.getByRole('button')).toHaveTextContent('Next page');
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
      await new Promise(r => setTimeout(r, 2000));
    })
    expect(page).toBe(2);

  })
})
