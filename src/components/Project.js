import React from 'react';

const Project = ({ number, github, live }) => (
    <div 
    className={`projects__item projects__item--${number}`}
    style={{
        animation: `show-project 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) .${9 - number}s`,
        animationFillMode: 'forwards'
    }}
    >
        <div className="projects__content">
            <div
                className={`projects__img projects__img--${number}`}
                style={{
                    backgroundImage: `linear-gradient(rgba(52, 73, 94, .2), rgba(52, 73, 94, .4)), url(./images/project-${number}.png)`
                }}
                >
            </div>
            <div className="project">
                <div className="project__option">
                    <a href={live} target="t_blank" className="project__link">
                        <span className="project__text">watch</span>
                        <svg className="project__icon">
                            <use href="/images/sprite.svg#icon-eye"></use>
                        </svg>
                    </a>
                </div>
                <div className="project__option">
                    <a href={github} target="t_blank" className="project__link">
                        <span className="project__text">view code</span>
                        <svg className="project__icon">
                            <use href="/images/sprite.svg#icon-embed"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Project;