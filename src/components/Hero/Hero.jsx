import React from 'react'
import "./Hero.css"
import {motion} from "framer-motion"
import { desktopProfile,tabletProfile,mobileProfile, circle } from '../../const';



const icon = {
    hidden: {
    //   opacity: 0,
      pathLength: 0,
    //   fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
    //   opacity: 1,
      pathLength: 1,
      transition:{
            duration:1
      }
    //   fill: "rgba(255, 255, 255, 1)"
    }
  };



const Hero = ({dev}) => {
  return (
    <div className="hero">
      <div className="hero-col">
      <div className="mobile">
        <picture>
            <source media="(min-width:850px)" srcSet={desktopProfile}/>
            <source media="(min-width:425px)" srcSet={tabletProfile}/>
            <img className="profile-img" src={mobileProfile} alt="img"/>
         </picture>
         <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="129" height="129"><motion.circle variants={icon} initial="hidden" animate="visible" cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)"/></svg>
        </div>
      </div>
        <div className="hero-col">
            <div className="hero-card">
                <h1 className="hero-h1">Nice to meet you! I'm <span className="underline">{dev}</span>.</h1>
                <p className="hero-blurb">
                    Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
                </p>
                <button className="btn primary">Contact Me</button>
            </div>
        </div>
        {/* <div className="hero-col"> */}

<div className="profile-img-div desktop">
        <picture>
            <source media="(min-width:1050px)" srcSet={desktopProfile}/>
            <source media="(min-width:425px)" srcSet={tabletProfile}/>
            <img className="profile-img" src={mobileProfile} alt="img"/>
         </picture>
         <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="129" height="129"><motion.circle variants={icon} initial="hidden" animate="visible" cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)"/></svg>
        </div>
</div>
    // </div>
  )
}

export default Hero