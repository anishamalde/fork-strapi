import React from 'react';
import { Recipes } from '../../components';
import { useSearchContext } from '../../context/search.context';

const SearchResultsScreen = () => {
  const { searchResults } = useSearchContext();
  return <Recipes recipes={searchResults} />;
};

export default SearchResultsScreen;
