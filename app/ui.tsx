'use client';

import DropboxImageList from 'components/dropbox-image-list';
import FileDragDropZone from 'components/file-dragdropzone';
import Logo from 'components/logo';
import SearchComponent from 'components/search-component';
import useDebouncedSearch from 'hooks/useDebouncedSearch';

export default function UI() {
  const { searchInput, setSearchInput } = useDebouncedSearch();

  return (
    <main className="w-full p-2 flex flex-col gap-4 xl:px-20">
      <Logo />
      <SearchComponent setSearchInput={setSearchInput} />
      <FileDragDropZone />
      <DropboxImageList searchInput={searchInput} />
    </main>
  );
}
