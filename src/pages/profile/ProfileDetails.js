import ProfileCandidate from "../../components/profile/ProfileCandidate";

const ProfileDetails = () => {
  const dummyProfile = { 
    profilePicture: "https://picsum.photos/200/200",
    name: "Smithy Jegermen Jensen", 
    job: "Pirates", 
    domicile: "Bikini Bottom", 
    workPlace: "Ocean", 
    description: "The greatest pirate ever #1",
    skills: ["JavaScript", "CSS", "Vue JS"], 
    email: "smithy@gmail.com",
    instagram: "@numero_uno",
    github: "numbero_uno",
    coverImage: "https://picsum.photos/id/1/1200/800" 
   }

  return (
    <ProfileCandidate profile={dummyProfile} />
  )
}

export default ProfileDetails;