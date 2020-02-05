import React from 'react';
import Project from './Project';

const Projects = () => (
    <section className="projects">
        <div className="row projects__display-flex">
            <Project
                number={5}
                github={'https://github.com/floxaz/luxuryVoyage'}
                live={'https://luxuryvoyage.herokuapp.com/'}
            />
            <Project
                number={4}
                github={'https://github.com/floxaz/movie-gallery'}
                live={'http://moviegallery.rossyatsura.com'}
            />
            <Project
                number={3}
                github={'https://github.com/floxaz/calculator'}
                live={'http://calculator.rossyatsura.com'}
            />
            <Project
                number={2}
                github={'https://github.com/floxaz/weatherApp'}
                live={'https://floxaz.github.io/weather-app-live'}
            />
            <Project
                number={1}
                github={'https://github.com/floxaz/top-poems'}
                live={'https://floxaz.github.io/top-poems'}
            />
        </div>
    </section>
);

export default Projects;