import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Switch, Route } from 'react-router-dom';
import client from './utils/apolloClient';
import { TopNav } from './components';
import {
  HomeScreen,
  Recipe,
  Category,
  SearchResultsScreen,
} from './containers';
import StyleWrapper from './utils/StyleWrapper';
import { SearchProvider } from './context/search.context';
function App() {
  return (
    <SearchProvider>
      <ApolloProvider client={client}>
        <StyleWrapper>
          <TopNav />
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/search' component={SearchResultsScreen} exact />
            <Route path='/recipe/:id' component={Recipe} exact />
            <Route path='/category/:id' component={Category} exact />
          </Switch>
        </StyleWrapper>
      </ApolloProvider>
    </SearchProvider>
  );
}

export default App;
