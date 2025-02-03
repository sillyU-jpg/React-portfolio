import { text } from "motion/react-client"
import { useState } from "react"


const Projects = () => {

    const [projectsArr, setProjects] = useState([
        {
            title: "ImageDaily",
            description: "my daily image blog with an emphasis on the image. Implemented using firebase and firestore",
            image: './project/imgdaily.png',
                 link: "/imagedaily"
        },
        {
            title: "Ode to Sky World",
            description: "A passion project of mine, A detailed history and archive of the Sky World entertainment centre",
            image: "skyworld.landingPage",
            link: "/skyworld"
        },
        {
            title: "EcoVision Smart sorting bin",
            description: "An AI powered smart sorting bin, part of my year two works",
            image: "ecovision.image",
              link: "/ecovisionbin"
        },
        {
            title: "The robertson gift",
            description: "a 3D interactive replication of the robertson gift, an exhibition from Auckland art gallery.",
            image: "art gallery 3d recreation image",
            link: "/robertsongift"
        },
        {
            title: "Recursive spaces",
            description: "3D snippets of places that caught my eye in auckland city, and an image gallery of these spaces",
            image: "./project/recursive.png",
            link : "/recursive"

        }
        
    ])

    return ( <>
    <div id="title-text"> 
        <h1> Projects </h1>
        <h2>There is a list of all of my projects, through university, as well as my personal projects</h2>
        </div>
        <div className="projects-list">
          
            {projectsArr.map((project) => (
             
                 <div className="project-item" key={ project.title }>
                   <img className="project-image"src={project.image} alt=""/>
               <a href={project.link}>  <h2 className="project-title">{ project.title }</h2> </a>
                    <p> { project.description }</p>
                   
                </div> 



            ))}
        </div>
        </>
    )
}

export default Projects