import React from 'react';
import Contact from './Contact';

const Home = () => (
  <React.Fragment>
    <header className="header">
      <div className="row">
        <h1 className="header__headline">Ross Yatsura</h1>
        <p>frontend developer based in Venice</p>
      </div>
    </header>
    <Contact />
  </React.Fragment>
);

export default Home;