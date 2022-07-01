import styles from '../styles/Components.module.css';

interface DarkModeButtonProps {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ darkMode, setDarkMode }) => {

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
