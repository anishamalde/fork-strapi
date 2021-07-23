import React from 'react';
import { Recipes } from '../../components';
import { useSearchContext } from '../../context/search.context';
import Page from '../../templates/Page/Page';

const SearchResultsScreen = () => {
  const { searchResults } = useSearchContext();
  return (
    <Page>
      <Recipes recipes={searchResults} />
    </Page>
  );
};

export default SearchResultsScreen;
