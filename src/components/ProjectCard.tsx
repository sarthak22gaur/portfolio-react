function ProjectCard() {
    return (
        <div className="project-card">
        <div className="project-card__image">
            <img src="https://via.placeholder.com/300x200" alt="project" />
        </div>
        <div className="project-card__info">
            <h3 className="project-card__title">Project Title</h3>
            <p className="project-card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, quisquam.
            </p>
            <div className="project-card__buttons">
            <a href="/" className="btn btn--primary">
                Live Demo
            </a>
            <a href="/" className="btn btn--secondary">
                Code
            </a>
            </div>
        </div>
        </div>
    );
}

export default ProjectCard;