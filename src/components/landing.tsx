import { useRef } from "react"
import Intro from './Intro'
import { Typewriter } from "react-simple-typewriter"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact"

const landing = () => {
  const ref = useRef<null | HTMLDivElement>(null)
  const projectsRef = useRef<null | HTMLDivElement>(null)
  let arr = ["Web-developer", "App-developer", "AIML-developer","So?"]
  const handleOnClick= ()=>{
    ref.current?.scrollIntoView({behavior:'smooth',block:'start'})
  }

  const scrollToProjects = ():void => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className='landing'>
    <h1>am I</h1>
    <h1><Typewriter words={arr} cursor={true} cursorBlinking={true} /></h1>
    <button onClick={handleOnClick}>whoami</button>
    </div>
    <Intro ref={ref} scrollToProjects={scrollToProjects} />
    <Education/>
    <Projects />
    <Contact/>
    <div style={{color:"white",textAlign:"center",height:"100px"}}>made with ❤️ by <a href="https://www.github.com/Gen1us1100" target="_blank" style={{color:"rgb(0, 225, 255)"}}>Gen1us</a></div>
    </>
  )
}

export default landing