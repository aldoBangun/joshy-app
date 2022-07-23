import CandidateExperienceItem from "./CandidateExperienceItem";

const CandidateExperienceList = (props) => {
  const { experiences } = props;

  return (
    <div>
      {
        experiences.map(experience => (
          <CandidateExperienceItem key={experience.id} {...experience} />
        ))
      }
    </div>
  )
}

export default CandidateExperienceList;