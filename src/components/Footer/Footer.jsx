import React from 'react'
import {github,twitter,frontEndMentor,linkedIn} from "../../const.js"
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        <h3 className="footer-header">adamkeyes</h3>
        <ul className="footer-links">
            <li className="footer-item">
                <a className="footer-link" href="http://www.github.com/jgreen721" target="_blank">
                    <img src={github} alt="link-icon"/>
                </a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="https://www.frontendmentor.io/profile/jgreen721" target="_blank">
                    <img src={frontEndMentor} alt="link-icon"/>
                </a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="http://www.github.com/jgreen721" target="_blank">
                    <img src={linkedIn} alt="link-icon"/>
                </a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="http://www.github.com/jgreen721" target="_blank">
                    <img src={twitter} alt="link-icon"/>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer