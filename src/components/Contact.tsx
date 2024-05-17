import ShellComponent from "./shellComponent"

import { useInView } from 'react-intersection-observer';

const ContactComponent=()=>{
  return(
    <>
    <ShellComponent text={["echo contact"]} />
    <h3>Email: <a href="mailto:coder.sam.1100@gmail.com" style={{color:"white"}}>coder.sam.1100@gmail.com</a></h3>
    <h3>LinkedIn: <a href="https://www.linkedin.com/in/sameer-godse-18523a222/" style={{color:"white"}}>LinkedIn</a></h3>
    </>
  )
};

/*TODO: Add a contact form and use WP as backend */
const Contact = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1,    // 10% of the component should be visible to trigger
  });
  return (
    <>
    <div ref={ref} className="contact">
    <span>wieeee</span>
    {inView?<ContactComponent/>:null}
    
    </div>
    </>
  )
}

export default Contact