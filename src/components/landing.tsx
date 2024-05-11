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
    {/* <button style={{height:"100px"}}></button> */}
    {/* <div style={{height:"30 px"}}></div> */}
    <Intro ref={ref} scrollToProjects={scrollToProjects} />
    {/* <div style={{height:"1000px"}}></div> */}
    <Projects ref={projectsRef}/>
    <Education/>
    <Contact/>
    </>
  )
}

export default landing