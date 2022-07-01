import { SettingsToolbar } from '../components';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SettingsToolbar component', () => {

  it('Component renders', () => {
    render(<SettingsToolbar />);
    expect(screen.getByRole('button')).toHaveTextContent('☾');
  })

  let darkMode = false;
  function setDarkMode(bool) {
    darkMode = bool;
  }

  it('DarkModeButton functions', () => {
    render(<SettingsToolbar darkMode={darkMode} setDarkMode={setDarkMode} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(darkMode).toBe(true);
  })
})
