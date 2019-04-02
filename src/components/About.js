import React from 'react';

const About = props => (
  <div className="about">
    <div className="row about__display-flex">
      <figure>
        <img src="images/portrait.jpg" className="about__img" alt="portrait"></img>
      </figure>
      <div className="about__description">
        <h2>Hello,</h2>
        <p>
          my name is Rostylsav Yatsura and I am a passionate web developer,
          who specializes in creating dynamic and beautiful web pages.
          The creation process involves the use of the latest technologies of our
          fast-paced digital world.
         </p>
        <p>
          My primary focus is frontend web development with React.js.
          I love dedicating days and even weeks to sharpen every pixel
          of my personal projects, before showing them to the light.
         </p>
        <p>
          All in all, it would be a real pleasure for me if my passion and interest
          in tech could solve people's problems and make their life easier.
          Therefore, in case you have any questions, don't hesitate and contact me.
         </p>
      </div>
    </div>
  </div>
)

export default About;