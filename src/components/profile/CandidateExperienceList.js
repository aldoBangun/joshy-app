import CandidateExperienceItem from "./CandidateExperienceItem";

const CandidateExperienceList = (props) => {
  const { experiences } = props;

  return (
    <>
      {experiences?.length ? (

        (<div>
          {
            experiences.map(experience => (
              <CandidateExperienceItem key={experience.id} {...experience} />
            ))
          }
        </div>)
      ) : (
        <p className="text-secondary">No experience yet</p>
      )}
    </>
  )
}

export default CandidateExperienceList;