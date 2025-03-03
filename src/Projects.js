import { ProjectData } from "./projectdata";

const Projects = () => {
  return (
    
    <div className="container">
      <div className="projects-section">
        <div id="title-text">
          <h1 className="page-title"> Personal Projects </h1>
        </div>
        <div className="projects-list">
          {ProjectData.map((ProjectData) => (
            <div className="project-item" key={ProjectData.title}>
              <img className="project-image" src={ProjectData.image} alt="" />
              <a href={ProjectData.link}>  
                <h2 className="project-title">{ ProjectData.title }</h2> 
              </a>
              <p className="project-desc"> { ProjectData.description }</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
