import React, {useState, useEffect} from "react";
import { Col, Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const HireUserDetails = () => {
    const [recruiterId, setRecruiterId] = useState(12);
    const [profileId, setProfileId] = useState(13);
    const [detailCandidate, setDetailCandidate] = useState({});
    const [detailRecruiter, setDetailRecruiter] = useState({});
    const [skills, setSkills] = useState([]);
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiYmxpYmxpQGdtYWlsLmNvbSIsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJjb3ZlckltYWdlIjpudWxsLCJyb2xlSWQiOjEsImlhdCI6MTY1ODY4OTQ5MSwiZXhwIjoxNjU4Nzc1ODkxfQ.U1mEgoaLAUX-Uf7Wqu5O7oddXlgpSXFJ4f-aSyhfzjg`}
    }
  
    useEffect ( () => {
   getDetailCandidate()
   getDetailRecruiter()
  }, [])

    const getDetailCandidate = () => {
    axios.get(`https://joshy-app.herokuapp.com/profile/${profileId}`, config)
    .then((res) =>{
        // console.log(res)
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

    const roleId = 1
    return (
        <>
        {roleId === 1 ? <Col className="d-grid align-items-center" lg={{ span: 4, offset: 1 }}>
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
                  <Card.Title className="mt-5">Skills</Card.Title>
                  <div className="d-flex flex-wrap gap-3 fs-3">
                    {skills?.map((data) => (
                      <Badge key={data} bg="warning">
                        {data}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col> : <Col className="d-grid align-items-center" lg={{ span: 4, offset: 1 }}>
              <Card className="" style={{ width: "24rem" }}>
                {console.log(detailRecruiter)}
                <Card.Body>
                  <img src={detailRecruiter.profilePicture} class="rounded-circle card-img-hire mt-3 mb-3 mx-auto d-flex justify-content-center" alt="150x150" />
                  <Card.Title>{detailRecruiter.companyName}</Card.Title>
                  <Card.Text>{detailRecruiter.companyField}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faLocationDot} size="xl" className="fa-thin me-3" />
                    {detailRecruiter.companyDomicile}
                  </Card.Subtitle>
                  <Card.Text>{detailRecruiter.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col> }
        </>
    )
}

export default HireUserDetails;

