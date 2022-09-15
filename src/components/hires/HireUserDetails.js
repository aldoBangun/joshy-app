import React, { useState, useEffect } from 'react'
import { Col, Card, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const HireUserDetails = () => {
  const [detailCandidate, setDetailCandidate] = useState({})
  const [skills, setSkills] = useState([])
  const { userId } = useParams()

  useEffect(() => {
    getDetailCandidate()
  }, [])

  const getDetailCandidate = () => {
    axios
      .get(`/profile/${userId}`)
      .then((res) => {
        setDetailCandidate(res?.data)
        setSkills(JSON.parse(res?.data?.skills))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Col className="d-flex align-items-start" lg={5}>
        <Card className="" style={{ width: '24rem' }}>
          <Card.Body>
            <img
              src={detailCandidate.profilePicture}
              class="rounded-circle card-img-hire mt-3 mb-3 mx-auto d-flex justify-content-center"
              alt="150x150"
            />
            <Card.Title>{detailCandidate.name}</Card.Title>
            <Card.Text>{detailCandidate.job}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xl"
                className="fa-thin me-3"
              />
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
      </Col>
    </>
  )
}

export default HireUserDetails
