import React, {useRef} from 'react'
import { useObserver } from '../../useObserver'

const ProjectItem = ({project}) => {
    const projectRef = useRef();
    const isShowing = useObserver(projectRef);
  return (
    <li ref={projectRef} className="project-item">
                    <div className={isShowing ? "project-item-top fadeinproject" : "project-item-top"}>
                    <div className="image-card">
                    <picture>
      <source media="(min-width:850px)" srcSet={project.img.desktop}/>
      <source media="(min-width:425px)" srcSet={project.img.desktop}/>
      <img className="project-img" src={project.img.mobile} alt="img"/>
                    </picture>
                    </div>
                    <div style={{'--animation':project.animation}} className={`project-overlay`}>
                        <button className="btn primary view-project-btn overlay-btn">View Project</button>
                        <button className="btn primary view-code-btn overlay-btn">View Code</button>
                    </div>
                    </div>
                    <div className={isShowing ? "project-bottom slide-left" : "project-bottom"}>
                        <h4 className="project-name">{project.name}</h4>
                        <ul className="lang-list">
                            {project.langs.map(p=>(
                                <li key={p.id} className="lang-item">{p.lang}</li>
                            ))}
                        </ul>
                        <div className="tablet-btn-row">
                        <button className="btn primary">View Project</button>
                        <button className="btn primary ml-2">View Code</button>
                        </div>
                    </div>

                </li>
  )
}

export default ProjectItem