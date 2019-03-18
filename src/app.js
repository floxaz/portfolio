import React from 'react';
import ReactDOM from 'react-dom';
import PorfolioRouter from './routers/PortfolioRouter';
import 'normalize.css/normalize.css';
import './styles/main.scss';

ReactDOM.render(<PorfolioRouter />, document.getElementById('app'));