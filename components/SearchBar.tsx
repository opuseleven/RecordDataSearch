import { FC, Dispatch, SetStateAction, ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/Components.module.css';

interface SearchBarProps {
  setArtistSearch: Dispatch<SetStateAction<string>>
}

const SearchBar: FC<SearchBarProps> = ({ setArtistSearch }) => {

  const [search, setSearch] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setArtistSearch(search);
  }

  return (
    <div className={styles.searchformcontainer}>
      <form onSubmit={(e) => handleClick(e)}>
        <input type="text" value={search} onChange={(e) => handleChange(e)}
          className={styles.searchinput}
        />
        <button className={styles.searchbutton}>
          Search
        </button>
      </form>
    </div>
  )
}
export { SearchBar };
