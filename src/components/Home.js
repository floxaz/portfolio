import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
import Canvas from './Canvas';

class Home extends React.Component {
  state = {
    headerWidth: undefined,
    headerHeight: undefined
  };

  componentDidMount = () => {
    this.getHeaderSize();
    window.addEventListener('resize', this.getHeaderSize);
  };

  getHeaderSize = () => {
    const header = this.refs.header;
    this.setState(() => ({
      headerWidth: header.offsetWidth,
      headerHeight: header.offsetHeight
    }));
  };

  render() {
    return (
      <React.Fragment>
        <header ref="header" className="header">
          <Canvas headerWidth={this.state.headerWidth} headerHeight={this.state.headerHeight} />
          <div className="row">
            <h1 className="header__headline">Ross Yatsura</h1>
            <p>frontend developer based in Venice</p>
          </div>
        </header>
        <Contact />
        <Projects />
        <Footer />
      </React.Fragment>
    )
  };
};

export default Home;