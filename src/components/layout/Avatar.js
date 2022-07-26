import { Image } from "react-bootstrap"

const Avatar = ( {image} ) => {
  return (
    <Image src={image} alt="user-image" height={24} width={24} roundedCircle />
  )
}

export default Avatar