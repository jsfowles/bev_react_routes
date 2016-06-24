import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import BeerCards from './components/BeerCards';
import BeerCard from './components/BeerCard';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={BeerCards} />
      <Route path="/beers/:id" component={BeerCard} />
    </Route>

    <Route path="*" status={404} component={NoMatch} />
  </Route>
)
