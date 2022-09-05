import { Envelope, Telephone, Instagram, Linkedin } from 'react-bootstrap-icons'

const ProfileCompanySocials = ({ phone, linkedin, instagram, email }) => (
  <div className="w-75 mx-auto mt-3">
    <ul className="list-style-none text-secondary d-flex flex-column gap-2">
      <li className='text-left d-flex align-items-center gap-4'>
        <Envelope />
        <span>{email}</span>
      </li>
      
      <li className='text-left d-flex align-items-center gap-4'>
        <Instagram />
        <span>{instagram}</span>
      </li>

      <li className='text-left d-flex align-items-center gap-4'>
        <Telephone />
        <span>{phone}</span>
      </li>

      <li className='text-left d-flex align-items-center gap-4'>
        <Linkedin />
        <span>{linkedin}</span>
      </li>
    </ul>
  </div>
)

export default ProfileCompanySocials