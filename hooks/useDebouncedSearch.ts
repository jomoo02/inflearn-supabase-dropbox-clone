import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useDebouncedSearch() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = useDebouncedCallback((value: string) => {
    setSearchInput(value);
  }, 400);

  return {
    searchInput,
    setSearchInput: handleSearchInput,
  };
}
