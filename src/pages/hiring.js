import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Hiring = () => {
  const [subjectMessage, setSubjectMessage] = useState('');
  const [description, setDescription] = useState('');
  const [recruiterId, setRecruiterId] = useState(1);
  const [profileId, setProfileId] = useState(2);
  const [detailCandidate, setDetailCandidate] = useState({});
  const [detailRecruiter, setDetailRecruiter] = useState({});
  // const [skills, setSkills] = useState('');

  useEffect ( () => {
   getDetailCandidate()
   getDetailRecruiter()
  }, [])

  const getDetailCandidate = () => {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzaG9wZWVAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOm51bGwsImNvdmVySW1hZ2UiOm51bGwsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjAwODkwLCJleHAiOjE2NTg2ODcyOTB9.Z6wJAqiDmMFEyBslDNogG9ZWmiDGJ4u9PljMf6phJoQ`}
    }
    axios.get(`http://localhost:8000/profile/${profileId}`, config)
    .then((res) =>{
        console.log(res)
        setDetailCandidate(res?.data)
        // setSkills(res?.data?.skills)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getDetailRecruiter = () => {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzaG9wZWVAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOm51bGwsImNvdmVySW1hZ2UiOm51bGwsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjAwODkwLCJleHAiOjE2NTg2ODcyOTB9.Z6wJAqiDmMFEyBslDNogG9ZWmiDGJ4u9PljMf6phJoQ`}
    }
    axios.get(`http://localhost:8000/profile/${recruiterId}`, config)
    .then((res) =>{
        // console.log(res)
        setDetailRecruiter(res?.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleHire = (e) => {
    e.preventDefault()
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzaG9wZWVAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOm51bGwsImNvdmVySW1hZ2UiOm51bGwsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjAwODkwLCJleHAiOjE2NTg2ODcyOTB9.Z6wJAqiDmMFEyBslDNogG9ZWmiDGJ4u9PljMf6phJoQ`}
    }
    const bodyParam = {
      messageSubject: subjectMessage,
      description,
      recruiterId
    }
    axios.post(`http://localhost:8000/profile/${profileId}/hires`, bodyParam, config)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  

  const roleId = 1
  const skills = ["Phyton", "Laravel", "Golang", "JavaScript", "PHP", "HTML", "C++", "Kotlin", "Swift"];
  return (
    <>
    {(roleId === 1) && (<div className="Hiring">
      <main className="bg-light w-100 p-3">
        <Container>
          <Row className="d-flex flex-row">
            <Col className="d-grid align-items-center" lg={{ span: 4, offset: 1 }}>
              <Card className="" style={{ width: "24rem" }}>
                <Card.Body>
                  <img src="https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1659312000&Signature=YgxX8dmP5E1kyjc7CvQ3KnEhXxdBgr9ql4xItMNxAfyHOTP9XNblxvEJsftkUhts6Bj9hu8yXaB7BxWec57~csFmq1V2zXAPSlxH9a69ane0AwV5wU4LBVA2w9cfn7TTLZWOP6y0KwGbD67YdhisWzYIvICGSpndNetAGzlAH2z~AJgQCnor0iUozW~-QiOwjQiBfj22lSEZ7BFQ3-Z66hTLfm3hZU17qNfPubViRMRinLjC0nhnsDh6vIhSHVQmqChMUH4Io6ABeeVFLW7Pu4Vi3OpiUD4E7lXhAz7B5hMelmEKizsWzcDKdwlTsj1oLRj3sIEYSw-1wWI2uf~0Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="rounded-circle card-img-hire mt-3 mb-3 mx-auto d-flex justify-content-center" alt="150x150" />
                  <Card.Title>{detailCandidate.name}</Card.Title>
                  <Card.Text>{detailCandidate.job}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faLocationDot} size="xl" className="fa-thin me-3" />
                    {detailCandidate.domicile}
                  </Card.Subtitle>
                  <Card.Text>{detailCandidate.description}</Card.Text>
                  <Card.Title className="mt-5">Skill</Card.Title>
                  <div className="d-flex flex-wrap gap-3 fs-3">
                    {skills.map((skill) => (
                      <Badge key={skill} bg="warning">
                        {skill}
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
