import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import PageNotFound from '../components/PageNotFound';

const PortfolioRouter = () => (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
);

export default PortfolioRouter;