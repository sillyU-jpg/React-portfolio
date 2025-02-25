import { useState } from "react";
import { ProjectData } from "./projectdata";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return ( <> 
  <div> 
  <h1 className="left-arrow" onClick={goToPrevious}>{"<"}</h1>
  <h1 className="right-arrow" onClick={goToNext}>{">"}</h1>
  </div>
    <div id="carousel">

      <section className="project-carousel" style={{ transform: `translateY(-${current * 100}%)` }}>
      

        {ProjectData.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${current === index ? "visible" : ""}`}
          >
            <img className="carousel-image" src={project.image} alt={project.title} />
            <a href={project.link}>
              <h2 className="carousel-title">{project.title}</h2>
            </a>
            <p className="carousel-desc">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
    </>
  );
};

export default Carousel;
