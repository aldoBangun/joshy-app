import { Image } from "react-bootstrap";
import externalLinkOptimization from "../../utils/externalLinkOptimization";

const CandidatePortofolioItem = (props) => {
  const { appName, appPicture, link } = props
  const optimizedLink = externalLinkOptimization(link)

  return (
    <a href={optimizedLink} className="portofolio-link text-decoration-none inline-block" target="_blank" rel="noreferrer">
      <Image src={appPicture} alt={appName} rounded className="w-100 inline-block mb-2" height={132}/>
      <p className="text-center text-inherit mb-0">{appName}</p>
    </a>
  )
}

export default CandidatePortofolioItem;