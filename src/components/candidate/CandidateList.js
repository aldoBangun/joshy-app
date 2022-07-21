import { Card, ListGroup } from "react-bootstrap";
import CandidateItem from "./CandidateItem";

const CandidateList = () => {
  const candidates = [
    {
      id: 1,
      name: 'Alfredo Bangun',
      job: 'Frontend Web Developer',
      domicile: 'Kupang',
      profile_picture: 'https://picsum.photos/id/1/200/200',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      name: 'Wan Javar',
      job: 'Frontend Web Developer',
      domicile: 'Malang',
      profile_picture: 'https://picsum.photos/id/2/200/200',
      skills: ['React JS', 'Bootstrap']
    },
    {
      id: 3,
      name: 'Mikhael Kevin',
      job: 'UI/UX Designer',
      domicile: 'Bandung',
      profile_picture: 'https://picsum.photos/id/3/200/200',
      skills: ['Adobe XD', 'Figma']
    },
    {
      id: 4,
      name: 'Rahimatun Ni\'mah',
      job: 'Backend Web Developer',
      domicile: 'Surabaya',
      profile_picture: 'https://picsum.photos/id/4/200/200',
      skills: ['PostgreSQL', 'ExpressJS']
    },
    {
      id: 5,
      name: 'Verdy Lugara',
      job: 'Full-Stack Web Developer',
      domicile: 'Jakarta',
      profile_picture: 'https://picsum.photos/id/5/200/200',
      skills: ['PostgreSQL', 'Express JS', 'React JS', 'Bootstrap']
    },
  ]

  return (
    <>
      <Card className="shadow-lg border-0 my-5">
        <ListGroup>
          {candidates.map((candidate) => (
            <CandidateItem key={candidate.id} {...candidate}/>
          ))}
        </ListGroup>
      </Card>
    </>
  )
}

export default CandidateList;