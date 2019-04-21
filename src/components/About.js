import React from 'react';

const About = props => (
  <div className="about">
    <div className="row about__display-flex">
      <figure className="about__portrait">
        <img src="images/portrait.jpg" className="about__img" alt="portrait"></img>
      </figure>
      <div className="about__description">
        <h2 className="about__headline">Hello,</h2>
        <p className="about__paragraph about__paragraph--1">
          my full name is Rostylsav Yatsura and I am a passionate web developer,
          who specializes in creating dynamic and beautiful web pages.
          The creation process involves the use of the latest technologies of our
          fast-paced digital world.
         </p>
        <p className="about__paragraph about__paragraph--2">
          My primary focus is frontend web development with React.js.
          I love dedicating days and even weeks to sharpen every pixel
          of my personal projects, before showing them to the light.
         </p>
        <p className="about__paragraph about__paragraph--3">
          All in all, it would be a real pleasure for me if my passion and interest
          in tech could solve people's problems and make their life easier.
          Therefore, in case you have any questions, don't hesitate to contact me.
         </p>
         <h2 className="about__headline">Skills</h2>
         <div className="about__skills">
           <div className="about__skill">html</div>
           <div className="about__skill">css</div>
           <div className="about__skill">sass</div>
           <div className="about__skill">javascript</div>
           <div className="about__skill">react</div>
           <div className="about__skill">redux</div>
           <div className="about__skill">jest</div>
           <div className="about__skill">git</div>
         </div>
      </div>
    </div>
  </div>
)

export default About;