import React from 'react';
import { InputBase } from '@material-ui/core';
import useStyles from './SearchBar.styles';
import { useSearchContext } from '../../context/search.context';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchEntries } = useSearchContext();
  const classes = useStyles();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    if (event.keyCode === 13) {
      searchEntries();
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Discover recipes...'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        onKeyDown={(e) => handleSubmitSearch(e)}
      />
    </div>
  );
};

export default SearchBar;
