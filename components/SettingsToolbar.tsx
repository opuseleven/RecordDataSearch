import { DarkModeButton } from '.';
import styles from '../styles/Components.module.css';

interface SettingsToolbarProps {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsToolbar: React.FC<SettingsToolbarProps> = ({ darkMode, setDarkMode }) => {

  return (
    <div className={styles.settingstoolbar}>
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
export { SettingsToolbar };
