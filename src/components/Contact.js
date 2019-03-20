import React from 'react';

const Contact = () => (
    <section className="contact">
      <div className="row">
         <svg className="contact__icon">
           <use href="/images/sprite.svg#icon-mail4"></use>
         </svg>

         <svg className="contact__icon">
           <use href="/images/sprite.svg#icon-github"></use>
         </svg>

         <svg className="contact__icon">
           <use href="/images/sprite.svg#icon-linkedin"></use>
         </svg>
      </div>
    </section>
);

export default Contact;