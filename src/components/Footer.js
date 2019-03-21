import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__copyright">
                &copy; Copyright {year} &nbsp;
                <span className="footer__author">Ross Yatsura</span>
            </p>
        </footer>
    );
};

export default Footer;