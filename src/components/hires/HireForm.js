import React, { useState, useEffect } from 'react'
import { Col, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HireForm = () => {
  const [subjectMessage, setSubjectMessage] = useState('')
  const [description, setDescription] = useState('')
  const [detailRecruiter, setDetailRecruiter] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const currentUserState = useSelector(state => state.currentUser)
  const { userId } = useParams()
  const recruiterId = currentUserState?.user?.userId
  const profileId = userId

  const navigate = useNavigate()

  useEffect(() => {
    getDetailRecruiter()
  }, [])

  const getDetailRecruiter = () => {
    axios
      .get(`/profile/${recruiterId}`)
      .then((res) => {
        setDetailRecruiter(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleHire = (e) => {
    e.preventDefault()
    setIsSubmited(false)
    setIsError(false)
    const bodyParam = {
      messageSubject: subjectMessage,
      description,
      recruiterId,
    }
    axios
      .post(`/profile/${profileId}/hires`, bodyParam)
      .then((res) => {
        setIsSubmited(true)
        setSuccessMessage(res?.data?.message)
        setTimeout(() => {
          navigate('/')
        }, 3000)
      })
      .catch((err) => {
        setIsError(true)
        setErrorMessage(err?.response?.data?.message)
        console.log(err)
      })
  }

  return (
    <>
      <Col lg={6}>
        <Form>
          <h1 className="mb-3">HIRE MESSAGE</h1>
          <p className="mb-5">
            Mulai pendekatan dengan talent untuk membahas kerja sama.
          </p>
          {isSubmited && <Alert variant="success">{successMessage}</Alert>}
          {isError && (
            <Alert variant="danger">Subject Message is required!</Alert>
          )}
          <Form.Group className="mb-4" controlId="formBasicPurpose">
            <Form.Label>Tujuan tentang pesan ini</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Masukan judul pesan"
              onChange={(e) => setSubjectMessage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label>Nama Perusahaan</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Masukan nama lengkap"
              value={detailRecruiter.companyName}
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="Masukan alamat email"
              value={detailRecruiter.email}
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Label>No Handphone</Form.Label>
            <Form.Control
              size="lg"
              type="phone"
              placeholder="Masukan no handphone"
              value={detailRecruiter.phoneNumber}
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="FormTextArea">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Deskripsikan/jelaskan lebih detail"
              rows={8}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid mt-5">
            <Button
              className="text-white"
              variant="warning"
              size="lg"
              type="submit"
              onClick={handleHire}
              disabled={isSubmited}
            >
              Hire
            </Button>
          </div>
        </Form>
      </Col>
    </>
  )
}

export default HireForm
