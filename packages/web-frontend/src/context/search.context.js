import React, { useState, createContext, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const searchValue = queryString.parse(location.search);

  const [searchTerm, setSearchTerm] = useState(searchValue._q);
  const [searchResults, setSearchResults] = useState([]);

  const searchEntries = () => {
    let url;
    searchTerm
      ? (url = `${process.env.REACT_APP_BACKEND_URL}/recipes?_q=${searchTerm}`)
      : (url = `${process.env.REACT_APP_BACKEND_URL}/recipes`);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .then(
        () =>
          searchTerm &&
          history.push({
            pathname: '/search',
            search: `?_q=${searchTerm}`,
          })
      )
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    searchEntries();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchEntries,
        searchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
