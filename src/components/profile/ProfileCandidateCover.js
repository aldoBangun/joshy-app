const ProfileCandidateCover = ({ coverImage }) => {
  let styleCover = {
    height: '20rem'
  }

  if (coverImage){
    styleCover = {
      ...styleCover,
      backgroundImage: `url(${coverImage})`,
      backgroundSize: "cover"
    }
  }

  return (
    <>
      <div className="bg-primary" style={styleCover}></div>
    </>
  )
}

export default ProfileCandidateCover;