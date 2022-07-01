import { DarkModeButton } from '../components';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DarkModeButton component', () => {

  let darkMode = false;
  function setDarkMode(bool) {
    darkMode = bool;
  }

  it('Component renders', () => {
    render(<DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />);
    expect(screen.getByRole('button')).toHaveTextContent('☾');
  })

  it('Component functions to toggle darkMode', () => {
    render(<DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(darkMode).toBe(true);
  })
})
