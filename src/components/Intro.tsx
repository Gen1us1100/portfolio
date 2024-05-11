import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
import ShellComponent from "./shellComponent"
import { forwardRef } from 'react';
import img_bio from '../assets/img_bio.jpg';

interface ActualIntroProps {
  scrollToProjects: () => void;
}

interface IntroProps {
  scrollToProjects: () => void;
}

interface BlockProps extends InjectedViewportProps<HTMLDivElement> {
  scrollToProjects: () => void;
}

const Block: React.FC<BlockProps> = ({ scrollToProjects, ...props }) => {
  let text:string[] = ["whoami"]
  const { inViewport, forwardedRef } = props;
  return (
    <div className="viewport-block" ref={forwardedRef}>
     {inViewport?<ShellComponent text={text}/>:<></>}
    {inViewport?<ActualIntro scrollToProjects={scrollToProjects}/>:<></>}
    </div>
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Intro: React.ForwardRefRenderFunction<HTMLDivElement, IntroProps> = ({ scrollToProjects }, ref)=> {

  return (
    <div ref={ref} style={{color:"white"}}>
      <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} scrollToProjects={scrollToProjects} />
               
    </div>
  )
}

const ActualIntro : React.FC<ActualIntroProps> = ({ scrollToProjects })=>{
  return(
    <div className="actualIntro">

      <p style={{fontSize:"30px"}}>I am Sameer Godse, <br /> pre-final year student studying <br />Computer Engineering
      <br />I identify myself as a "Developer"<br /> 
      <span style={{fontSize:"15px"}}>I believe in being able to adapt the vessel as water.</span>
      <br />
      
      <button style={{marginTop:"50px"}} onClick={scrollToProjects}>View Projects</button>
      </p>

      <img src={img_bio}></img>
      </div>
  )
}

export default forwardRef(Intro)