
import { Typewriter } from "react-simple-typewriter"
import ShellActions from "./shellActions";
interface shellProps{
  path? : string;
  text:string[]
}
const shellComponent = (props:shellProps) => {
  return (
    
    <div className="shell">
      <div className="terminal_top">
        <p style={{padding:"5px",margin:"0",color:"black"}}>#!bin/bash</p>
        
        <ShellActions></ShellActions>
        </div>
        <p style={{display:"inline-block", marginLeft:"0px"}}>~gen1us{props.path}:</p>
        <Typewriter words={props.text} cursor={true} cursorBlinking={false} typeSpeed={150}/> 
          {/* <p style={{marginLeft:"10px"}} className="rotate">/</p> */}
        
    </div>
  )
}

export default shellComponent