import { FC, Dispatch, SetStateAction } from 'react';
import styles from '../styles/Components.module.css';

interface DarkModeButtonProps {
  darkMode: boolean,
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

const DarkModeButton: FC<DarkModeButtonProps> = ({ darkMode, setDarkMode }) => {

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <button className={darkMode ? styles.darkmodebuttondark : styles.darkmodebutton}
        onClick={() => handleClick()}
      >
        {'\u263e'}
      </button>
    </div>
  )
}
export { DarkModeButton };
