import React,{useRef} from 'react'
import { useObserver } from '../../useObserver'

const Item = ({skill}) => {
    const itemRef = useRef()
    const isShowing = useObserver(itemRef)
  return (
    <li ref={itemRef}  className="skill-item">
    <h1 className={isShowing ? "skill-h1 slide-left" : "skill-h1"}>{skill.lang}</h1>
    <p className={isShowing ? "skill-blurb slide-left" : "skill-blurb"}>{skill.years} Years Experience</p>
  </li>
  )
}

export default Item