import { useState } from 'react';

interface SearchBarProps {
  setArtistSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ setArtistSearch }) => {

  const [search, setSearch] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setArtistSearch(search);
  }

  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <input type="text" value={search} onChange={(e) => handleChange(e)} />
        <button>Search</button>
      </form>
    </div>
  )
}
export { SearchBar };
