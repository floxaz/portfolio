import React from 'react';

const Contact = () => (
  <section className="contact">
    <div className="row">
      <div className="contact__dashboard">
        <a href="mailto:rossty4422@gmail.com" className="contact__link">
          <svg className="contact__icon">
            <use href="/images/sprite.svg#icon-mail4"></use>
          </svg>
        </a>

        <a href="https://github.com/floxaz" target="_blank" className="contact__link">
          <svg className="contact__icon">
            <use href="/images/sprite.svg#icon-github"></use>
          </svg>
        </a>

        <a href="#" className="contact__link">
          <svg className="contact__icon">
            <use href="/images/sprite.svg#icon-linkedin"></use>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;