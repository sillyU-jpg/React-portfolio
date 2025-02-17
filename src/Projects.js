import {useRef, useState } from "react";

const Projects = () => {
  const containerRef = useRef(null); // UseRef to get the container div
  const [projectsArr] = useState([
    {
      title: "ImageDaily",
      description: "My daily image blog, showcasing a new image from my camera roll each day, built with vanilla HTML, CSS, and JavaScript, with the backend hosted on Firebase Storage.",
      image: './project/imgdaily.png',
      link: "/imagedaily"
    },
    // {
    //   title: "Ode to Sky World",
    //   description: "A passion project of mine, A detailed history and archive of the Sky World entertainment centre",
    //   image: "./project/skyworld.png",
    //   link: "/skyworld",
    //   long: "To me, auckland City doesnt provide much in terms of attractions, and the city can feel quite empty and lacking in character, to me Sky world is a large part of this, In one of the highest (foot) traffic parts of Auckland City rests a shell of an entertainment center, a building full of character and even more full of history."
    // },
    // {
    //   title: "EcoVision Smart sorting bin",
    //   description: "An AI powered smart sorting bin, part of my year two works",
    //   image: "ecovision.image",
    //   link: "/ecovisionbin",
    //   long: "EcoVision was my second-year Creative Technologies project, integrating motorized robotics for automated waste sorting and bin waste-level detection. At its core was a Python-powered AI system utilizing the YOLOv4 object detection model, trained specifically on New Zealand waste and recycling materials. Additionally, we developed a visual interface that displayed real-time recycling statistics and featured interactive games for educational engagement. The entire system was optimized to run on a Raspberry Pi single-board computer."
    // },
    // {
    //   title: "The Robertson gift",
    //   description: "a 3D interactive replication of the robertson gift, an exhibition from Auckland art gallery.",
    //   image: "art gallery 3d recreation image",
    //   link: "/robertsongift",
    //   long: "For my second-year Synthetic Realities project, I designed and developed a 1:1 digital recreation of The Robertson Gift, an Auckland art gallery exhibition showcasing works from some of the world's most renowned artists. Using Unity, I recreated the exhibit with over 40 featured pieces, incorporating interactive elements that trigger obscure music and soundscapes inspired by the artwork."
    // },
    // {
    //   title: "Recursive spaces",
    //   description: "3D snippets of places that caught my eye in Auckland city, and an image gallery of these spaces",
    //   image: "./project/recursive.png",
    //   link : "/recursive",

    // }
  ]);



  return (
    <div ref={containerRef} className="container">
      <div className="projects-section">
        <div id="title-text">
          <h1 className="page-title"> Projects </h1>
        </div>
        <div className="projects-list">
          {projectsArr.map((project) => (
            <div className="project-item" key={project.title}>
              <img className="project-image" src={project.image} alt="" />
              <a href={project.link}>  
                <h2 className="project-title">{ project.title }</h2> 
              </a>
              <p className="project-desc"> { project.description }</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
