import github_logo from "../assets/github-142-svgrepo-com.svg"
interface CardProps{
    title: string;
    description:string;
    liveLink?:string;
    githubLink?:string;
}


const Card = (CardProps:CardProps) => {
    let {title,description,liveLink,githubLink} = CardProps;
  return (
        <div className="Card">
            <button><a href={liveLink} target="blank" style={{textDecoration:"none"}}>{title}</a></button>
            <p>{description}</p>
            <a href={githubLink} target="blank"><img src={github_logo} alt="github_logo" style={{height:"20%"}}/></a>
        </div>
  )
}

export default Card