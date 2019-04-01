import React from 'react';

const About = props => (
  <div className="about">
    <div className="row about__display-flex">
      <figure>
        <img src="images/me.jpg" className="about__img"></img>
      </figure>
      <div className="about__description">
        <p>
          My name is Rostylsav Yatsura and I am a passionate web developer,
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
          in Tech could solve people's problems and make their life easier.
          If you have any questions, contact me.
         </p>
      </div>
    </div>
  </div>
)

export default About;