interface EduTextProps  {
    institution: string;
    edu: string;
    score: string;
    yop: string;
}


const EduText = (EduTextProps:EduTextProps) => {
    let{institution,edu,score,yop}= EduTextProps
  return (
    <div className="eduText">
    <p style={{fontSize:"25px",margin:"2px"}}>{institution}</p>
    <p style={{fontSize:"20px",margin:"2px"}}>{edu}</p>
    <p style={{fontSize:"15px",margin:"2px"}}>{score}</p>
    <hr style={{height:"100px"}}/>
    <p style={{fontSize:"10px",margin:"2px"}}>{yop}</p>
    </div>
  )
}

export default EduText