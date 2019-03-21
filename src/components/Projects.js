import React from 'react';

const Projects = () => (
    <section className="projects">
        <div className="row projects__display-flex">
            <div className="projects__item">
                <figure>
                    <img src="images/project-3.png" alt="view calculator" className="projects__img" />
                </figure>
                <div className="project">
                    <div className="project__option">
                        <a href="#" className="project__link">watch</a>
                    </div>
                    <div className="project__option">
                        <a href="#" className="project__link">source code</a>
                    </div>
                </div>
            </div>
            <div className="projects__item">
                <figure>
                    <img src="images/project-2.png" alt="view calculator" className="projects__img" />
                </figure>
                <div className="project">
                    <div className="project__option">
                        <a href="#" className="project__link">watch</a>
                    </div>
                    <div className="project__option">
                        <a href="#" className="project__link">source code</a>
                    </div>
                </div>
            </div>

            <div className="projects__item">
                <figure>
                    <img src="images/project-1.png" alt="view calculator" className="projects__img" />
                </figure>
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