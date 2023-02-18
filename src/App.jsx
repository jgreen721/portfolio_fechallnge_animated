import './App.css'
import {Navbar,Hero,Skills,Projects,Contact,Footer} from "./components"
import {circle,rings} from "./const"
import {motion} from "framer-motion";






function App() {

  return (
    <div data-theme="dark" className="app">
      <div className="app-top">
      

      <motion.svg  initial={{translateX:"-500px"}} animate={{translateX:"0",transition:{duration:2}}} className="top-rings rings-icon" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g></motion.svg>
      <motion.svg  initial={{translateX:"-500px"}} animate={{translateX:"0",transition:{duration:2}}} className="top-left-rings rings-icon" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g></motion.svg>
      <Navbar/>
    <Hero/>
      <Skills/>
    <Projects/>
      </div>
      <div className="app-bottom">
      <Contact/>
      <Footer/>
      <img src={rings} className="bottom-rings rings-icon" alt="rings-img"/>
      </div>
    </div>
  )
}

export default App
