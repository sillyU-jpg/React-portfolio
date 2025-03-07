import React, { useState } from 'react';
import { ProjectData } from "./projectdata";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="container">
        <div className="projects-section">
          <div id="title-text">
            <h1 className="page-title"> Personal Projects </h1>
          </div>
          <div className="projects-list">
            {ProjectData.map((project) => (
              <div key={project.title}>
                <div className="project-item">
                  <img className="project-image" src={project.image} alt="" onClick={() => openModal(project)}/>
                  <p className="btn-open" onClick={() => openModal(project)}>  
                    <h2 className="project-title">{project.title}</h2>
                    </p>
                  <p className="project-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          {isModalOpen && [selectedProject] && (
            <div className="modal">
              <div className="modal-header">
                <h1>{selectedProject.title}</h1>
                <p className="btn-close" onClick={closeModal}>
                  &times;
                </p>
                </div>
                <div className="modal-content">
                  <div className="modal-carousel">
                <img src={selectedProject.altimg} className='modal-img' alt="project" />
                </div>
                <div className="modal-text"> <h1>{selectedProject.title}</h1>
                <p>{selectedProject.long}</p>
                <a href={selectedProject.link}>check out this project</a>
                </div>
              </div>
            </div>
          )}
          {isModalOpen && <div className="overlay" onClick={closeModal}></div>}
        </div>
      </div>
    </>
  );
};

export default Projects;
