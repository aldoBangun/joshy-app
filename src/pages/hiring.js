import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Hiring = () => {
  const [subjectMessage, setSubjectMessage] = useState('');
  const [description, setDescription] = useState('');
/* 
Login as recruiter
recruiterId = redux current user logged in(id)
profileId = selected profileId on userList
*/
  const recruiterId = 10;
  const profileId = 2;
  const [detailCandidate, setDetailCandidate] = useState({});
  const [detailRecruiter, setDetailRecruiter] = useState({});
  const [skills, setSkills] = useState([]);
  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoibG9lYmlzLnRlY2hAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjcxOTQwL2Fnd3ljbmdmN2t3d2docXRhNzBtLnBuZyIsImNvdmVySW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjUyNDg4L2d3MW0wY2xtNTNweG1sbW5xd21vLmpwZyIsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjgzOTY0LCJleHAiOjE2NTg3NzAzNjR9.lK9AisKp_Eff_Gw5mpx36s5HLa9OXmxsQ8e3d6sAhNI`}
  }

  useEffect ( () => {
   getDetailCandidate()
   getDetailRecruiter()
  }, [])

  const getDetailCandidate = () => {
    axios.get(`https://joshy-app.herokuapp.com/profile/${profileId}`, config)
    .then((res) =>{
        console.log(res)
        setDetailCandidate(res?.data)
        setSkills(JSON.parse(res?.data?.skills))
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getDetailRecruiter = () => {
    axios.get(`https://joshy-app.herokuapp.com/profile/${recruiterId}`, config)
    .then((res) =>{
        // console.log(res)
        setDetailRecruiter(res?.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleHire = (e) => {
    e.preventDefault()
    const bodyParam = {
      messageSubject: subjectMessage,
      description,
      recruiterId
    }

    axios.post(`https://joshy-app.herokuapp.com/profile/${profileId}/hires`, bodyParam, config)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  

  const roleId = 1
  return (
    <>
    {(roleId === 1) && (<div className="Hiring">
      <main className="bg-light w-100 p-3">
        <Container>
          <Row className="d-flex flex-row">
            <Col className="d-grid align-items-center" lg={{ span: 4, offset: 1 }}>
              <Card className="" style={{ width: "24rem" }}>
                <Card.Body>
                  <img src={detailCandidate.profilePicture} class="rounded-circle card-img-hire mt-3 mb-3 mx-auto d-flex justify-content-center" alt="150x150" />
                  <Card.Title>{detailCandidate.name}</Card.Title>
                  <Card.Text>{detailCandidate.job}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faLocationDot} size="xl" className="fa-thin me-3" />
                    {detailCandidate.domicile}
                  </Card.Subtitle>
                  <Card.Text>{detailCandidate.description}</Card.Text>
                  <Card.Title className="mt-5">Skill</Card.Title>
                  <div className="d-flex flex-wrap gap-3 fs-3">
                    {skills.map((value) => (
                      <Badge key={value} bg="warning">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-grid p-5 align-items-center">
              <Form>
                <h1 className="mb-3">Hubungi, Lous Tomlinson</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <Form.Group className="mb-4" controlId="formBasicPurpose">
                  <Form.Label>Tujuan tentang pesan ini</Form.Label>
                  <Form.Control size="lg" placeholder="Masukan judul pesan" onChange={(e) => setSubjectMessage(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control size="lg" placeholder="Masukan nama lengkap" value={detailRecruiter.companyName} disabled readOnly />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Masukan alamat email" value={detailRecruiter.email} disabled readOnly />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPhone">
                  <Form.Label>No Handphone</Form.Label>
                  <Form.Control size="lg" type="phone" placeholder="Masukan no handphone" value={detailRecruiter.phoneNumber} disabled readOnly/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="FormTextArea">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control as="textarea" placeholder="Deskripsikan/jelaskan lebih detail" rows={8} 
                  onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>
                <div className="d-grid mt-5">
                  <Button className="text-white" variant="warning" size="lg" type="submit"
                  onClick={handleHire}>
                    Hire
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>) }
    {(roleId === 2) && (<h1>halaman candidate</h1>) }
    </>
    
  );
};

export default Hiring;
