import React from 'react'
import Item from './Item';
import "./Skills.css"

const Skills = () => {
  const skills=[
    {id:1,lang:'HTML',years:4},
    {id:2,lang:'CSS',years:4},
    {id:3,lang:'Javascript',years:4},
    {id:4,lang:'Accessibility',years:4},
    {id:5,lang:'React',years:3},
    {id:6,lang:'Sass',years:3},
  ]
  return (
    <ul className="skills">
      {skills.map(s=>(
    <Item key={s.id} skill={s}/>
      ))}
    </ul>
  )
}

export default Skills