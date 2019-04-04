import React from 'react';

const Projects = () => (
    <section className="projects">
        <div className="row projects__display-flex">
            <div className="projects__item projects__item--1">
                <div className="projects__img projects__img--1"></div>
                <div className="project">
                    <div className="project__option">
                        <a href="#" className="project__link">watch</a>
                    </div>
                    <div className="project__option">
                        <a href="#" className="project__link">source code</a>
                    </div>
                </div>
            </div>

            <div className="projects__item projects__item--2">
                <div className="projects__img projects__img--2"></div>
                <div className="project">
                    <div className="project__option">
                        <a href="#" className="project__link">watch</a>
                    </div>
                    <div className="project__option">
                        <a href="#" className="project__link">source code</a>
                    </div>
                </div>
            </div>

            <div className="projects__item projects__item--3">
                <div className="projects__img projects__img--3"></div>
                <div className="project">
                    <div className="project__option">
                        <a href="#" className="project__link">watch</a>
                    </div>
                    <div className="project__option">
                        <a href="#" className="project__link">source code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;