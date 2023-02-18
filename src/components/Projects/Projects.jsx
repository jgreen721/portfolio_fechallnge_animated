import React from 'react'
import { project1,project2,project3,project4,project5,project6,projectSmall1,projectSmall2,projectSmall3,projectSmall4,projectSmall5,projectSmall6 } from '../../const'
import "./Projects.css"
import ProjectItem from './ProjectItem'

const Projects = () => {
    const projects=[
        {id:1,name:"Design Portfolio",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"}],img:{desktop:project1,mobile:projectSmall1},animation:"slideleft"},
        {id:2,name:"E-Learning Landing Page",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"}],img:{desktop:project2,mobile:projectSmall2},animation:"slideright"},
        {id:3,name:"Todo Web App",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"},{id:3,lang:"Javascript"}],img:{desktop:project3,mobile:projectSmall3},animation:"slidedown"},
        {id:4,name:"Entertainment Web App",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"},{id:3,lang:"Javascript"}],img:{desktop:project4,mobile:projectSmall4},animation:"slideup"},
        {id:5,name:"Memory Game",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"},{id:3,lang:"Javascript"}],img:{desktop:project5,mobile:projectSmall5},animation:"slideright"},
        {id:6,name:"Art Gallery Showcase",langs:[{id:1,lang:"HTML"},{id:2,lang:"CSS"},{id:3,lang:"Javascript"}],img:{desktop:project6,mobile:projectSmall6},animation:"slideleft"}
    ]
  return (
    <div className="projects-parent">
        <div className="project-top-row">
            <h1 className="project-h1">Projects</h1>
            <button className="btn primary">Contact Me</button>
        </div>
        <ul className="projects">
            {projects.map(p=>(
                <ProjectItem key={p.id} project={p}/>
            ))}
        </ul>

    </div>
  )
}

export default Projects