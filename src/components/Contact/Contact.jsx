import React, {useState, useRef} from 'react'
import { useObserver } from '../../useObserver';
import "./Contact.css"


const Contact = () => {
    const contactRef = useRef();
    const isShowing = useObserver(contactRef);
    const [error,setError] = useState([0,0])
  return (
    <div ref={contactRef} className={isShowing ? "contact-form show-form" : "contact-form"}>
        <div className="contact-col">
            <h1 className="contact-h1">Contact</h1>
            <p className="contact-blurb blurb">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <div className="contact-col form">
            <div className="form-div">
                <input type="text" name="name" placeholder="Name" autoComplete="off" className={error[0] ? "form-control error" : "form-control"} />
            </div>
            <div className="form-div">
                <input type="text" name="email" placeholder="Email" autoComplete="off" className={error[1] ? "form-control error" : "form-control"} />
            </div>
            <div className="form-div">
                <textarea className="textarea-control" name="message" id="message" placeholder="Message" autoComplete="off"/>
            </div>
            <div className="form-div">
                <button className="primary btn form-btn">Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact