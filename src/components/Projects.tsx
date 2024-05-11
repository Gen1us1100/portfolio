import { forwardRef } from "react";
import ShellComponent from "./shellComponent";
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
// import withViewportHandling from './withViewportHandling';
import Card from "./Card";

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
    let projectsText = ["cd Projects","ls -a"]
    const { inViewport, forwardedRef } = props;
    return (
        <div className="viewport-block" ref={forwardedRef} id="projects">
            <p style={{color:"black"}}>wieeeeeee</p>
       {inViewport ? (<ShellComponent text={projectsText}/> 
       ): <></>}
       {inViewport ?<div className="projectCards">
       <Card title={"SentiTweet"} description={"Tweet Sentiment Analyser using ML."} liveLink={"https://tweet-sentiment-analyser.onrender.com/"}
       githubLink="https://github.com/Gen1us1100/Tweet"/>
       <Card title={"SnapDino"} description={"Dino game using snap 🤞 -using OpenCV"} liveLink="https://www.linkedin.com/posts/sameer-godse-18523a222_opencv-mediapipe-activity-7122271410915282944-Ncw6?utm_source=share&utm_medium=member_desktop"/>
       <Card title={"PHP auth"} description={"Basic Signup and Login using only PHP and MySQL"} githubLink="https://github.com/Gen1us1100/php-auth"/>
       </div>:<></>}
      </div>
    );
}

const ViewportBlock = handleViewport(Block, { /** options: {}, config: {} **/ });
// const ViewportShellComponent = withViewportHandling(ShellComponent);

const Projects = forwardRef<HTMLDivElement>((props,ref) => {
    // let projectsText = ["cd Projects","ls -a"]
    return (
        <div ref={ref} style={{color:"white"}} className="projects">
            <ViewportBlock onEnterViewport={() => console.log('enterProjects')} onLeaveViewport={() => console.log('leaveProjects')}/>
            {/* <ShellComponent text={projectsText}/> */}
            {/* <ViewportShellComponent text = {projectsText} ref={undefined}/> */}
        </div>
    );
});

export default Projects;
