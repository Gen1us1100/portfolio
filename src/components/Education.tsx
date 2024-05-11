import EduText from "./EduText"
import mlcert from '../assets/ml_cert.png'
import dbms_cert from '../assets/dbms_cert.png'
import ShellComponent from "./shellComponent"
const Education = () => {
  return (
    <>
    <ShellComponent text={["cat Education && Certifications"]} ></ShellComponent>
    <div className="Education">

    
    <div className="Education-secondary">
        <EduText institution="NSV" edu="SSC" score="88.4%" yop="2019"></EduText>
        <EduText institution="Fergusson College" edu="HSC" score="87.17%" yop="2021"></EduText>
        <EduText institution="PESMCOE" edu="BE" score="8.94 CGPA" yop="2025"></EduText>
        <hr style={{position:"absolute",width:"40%",margin:"130px"}}/>
    </div>
    <div className="certifications">
      <a href="https://coursera.org/verify/specialization/XGCMJQQJTTFH"><img src={mlcert} style={{width:"80%",margin:"20px"}}/></a>
    
      <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs79/Course/NPTEL23CS79S3505224110107469.pdf">
        <img src={dbms_cert} style={{width:"80%",margin:"20px"}}/></a>
    </div>
    </div>
    </>
  )
}

export default Education