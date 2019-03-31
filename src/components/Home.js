import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
import Canvas from './Canvas';

const Home = () => (
  <React.Fragment>
    <header className="header">
      <Canvas />
      <div className="row">
        <h1 className="header__headline">Ross Yatsura</h1>
        <p>frontend developer based in Venice</p>
      </div>
    </header>
    <Contact />
    <Projects />
    <Footer />
  </React.Fragment>
);

export default Home;