import React from 'react';
import Typed from 'typed.js';
import Canvas from './Canvas';

class Home extends React.Component {
    componentDidMount = () => {
        const options = {
            strings: ['frontend developer based in Venice'],
            startDelay: 2000,
            cursorChar: '',
            typeSpeed: 50,
            backSpeed: 20
        }

        this.typed = new Typed(this.refs.shortDescription, options);
    }

    render = () => {
        return (
            <header className="header">
                <Canvas />
                <div className="row">
                    <h1 className="header__headline">Ross Yatsura</h1>
                    <p ref="shortDescription"></p>
                </div>
            </header>
        );
    };
}

export default Home;