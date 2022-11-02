import { DarkModeButton } from '.';
import { FC, Dispatch, SetStateAction } from 'react';
import styles from '../styles/Components.module.css';

interface SettingsToolbarProps {
  darkMode: boolean,
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

const SettingsToolbar: FC<SettingsToolbarProps> = ({ darkMode, setDarkMode }) => {

  return (
    <div className={styles.settingstoolbar}>
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
export { SettingsToolbar };
