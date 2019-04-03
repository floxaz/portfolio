import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import PageNotFound from '../components/PageNotFound';
import Footer from '../components/Footer';

const PortfolioRouter = () => (
  <BrowserRouter>
    <div className="content">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default PortfolioRouter;