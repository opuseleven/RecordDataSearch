import { useState, useEffect } from 'react';

interface SearchBarProps {
  setArtist: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ setArtist }) => {

  const [search, setSearch] = useState('');

  useEffect(() => {
    setArtist(search)
  }, [search])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
    </div>
  )
}
export { SearchBar };
