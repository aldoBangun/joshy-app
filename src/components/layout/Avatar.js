import { Image } from "react-bootstrap"
import { Person } from "react-bootstrap-icons"

const Avatar = ( {image} ) => {
  return (
    <>
      {image ? (
        <Image src={image} alt="user-image" height={24} width={24} roundedCircle />
      ) : (
        <Person height={20} width={20} color="gray" />
      )}
    </>
  )
}

export default Avatar