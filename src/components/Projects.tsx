import Card from "./Card";
import { useInView } from "react-intersection-observer";
import ShellComponent from "./shellComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectsComponent = () => {
  useEffect(() => {
    AOS.init({once:true});
  }, []);
  let projectsText = ["cd Projects && ls -a"];
  return (
    <>
      <ShellComponent text={projectsText} />
      <div className="projectCards" data-aos="fade-right" >
        <Card
          title={"SentiTweet"}
          description={"Tweet Sentiment Analyser using ML."}
          liveLink={"https://tweet-sentiment-analyser.onrender.com/"}
          githubLink="https://github.com/Gen1us1100/Tweet"
        />
        <Card
          title={"SnapDino"}
          description={"Dino game using snap 🤞 -using OpenCV"}
          liveLink="https://www.linkedin.com/posts/sameer-godse-18523a222_opencv-mediapipe-activity-7122271410915282944-Ncw6?utm_source=share&utm_medium=member_desktop"
          githubLink="https://gist.github.com/Gen1us1100/794b7cc793f9b68192eb96a41ebef7b4"
        />
        <Card
          title={"PHP auth"}
          description={"Basic Signup and Login using only PHP and MySQL"}
          liveLink="https://github.com/Gen1us1100/php-auth"
          githubLink="https://github.com/Gen1us1100/php-auth"
        />
      </div>
    </>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // 10% of the component should be visible to trigger
  });
  return (
    <>
      <div ref={ref} className="projects" id="projects">
        <span>wieeee</span>
        {inView ? <ProjectsComponent /> : null}
      </div>
    </>
  );
};

export default Projects;
