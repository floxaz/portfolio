import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="notFound">
    <div className="notFound__message">
      <h1 className="notFound__headline">404</h1>
      <p className="notFound__error">The page you requested couldn't be found</p>
      <Link to="/" className="notFound__link">Back To Home</Link>
    </div>
  </div>
);

export default PageNotFound;

