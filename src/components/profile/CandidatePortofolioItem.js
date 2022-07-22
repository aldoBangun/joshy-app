import { Image } from "react-bootstrap";

const CandidatePortofolioItem = (props) => {
  const { appName, appPicture, link } = props

  return (
    <a href={link} className="portofolio-link text-decoration-none inline-block" target="_blank" rel="noreferrer">
      <Image src={appPicture} alt={appName} rounded className="w-100 inline-block mb-2" height={132}/>
      <p className="text-center text-inherit mb-0">{appName}</p>
    </a>
  )
}

export default CandidatePortofolioItem;