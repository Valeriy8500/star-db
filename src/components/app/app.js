import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService(),
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    };

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />

              <Switch>
                <Route
                  path='/'
                  render={() => <h2>Welcome to StarDb</h2>}
                  exact />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets' component={PlanetsPage} />
                <Route path='/starships' exact component={StarshipsPage} />
                <Route
                  path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
