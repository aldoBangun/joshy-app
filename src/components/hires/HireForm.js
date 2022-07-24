import React, {useState, useEffect} from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HireForm = () => {
    const [subjectMessage, setSubjectMessage] = useState('');
    const [description, setDescription] = useState('');
    const [detailRecruiter, setDetailRecruiter] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmited, setIsSubmited] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [detailHire, setDetailHire] = useState([]);
    const [isCandidate, setIsCandidate] = useState(false);

    const roleId = 2
    const recruiterId = 12
    const profileId = 13
    const hireId = 5

    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiYmxpYmxpQGdtYWlsLmNvbSIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbm9jdHVybmNsb3VkL2ltYWdlL3VwbG9hZC92MTY1ODY4OTUyNy9vcXJidHNobTJ6d2R1Mmx4OG16ei5qcGciLCJjb3ZlckltYWdlIjpudWxsLCJyb2xlSWQiOjEsImlhdCI6MTY1ODY5MDAxMiwiZXhwIjoxNjU4Nzc2NDEyfQ.bp8pOf4_0H7X1gNfUvDGL_rJljs3OOXuTlv31BOi36I`}
    }
     useEffect (() => {
        setIsSubmited(false)
        getDetailRecruiter()
    }, [])

    useEffect (() => {
        if (roleId === 2) {
            getDetailHireMessage()
        }
    },[roleId])
 
    const getDetailHireMessage = () => {
        axios.get(`https://joshy-app.herokuapp.com/profile/${profileId}/hires/${hireId}`, config)
        .then((res) =>{
        // console.log(res)
        setDetailHire(res?.data?.[0])
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
    setIsError(false)
    const bodyParam = {
      messageSubject: subjectMessage,
      description,
      recruiterId
    }
    axios.post(`https://joshy-app.herokuapp.com/profile/${profileId}/hires`, bodyParam, config)
    .then((res) => {
      setIsSubmited(true)
      setSuccessMessage(res?.data?.message)
    //   setTimeout(() => {
    //     useNavigate('/')
    //   }, 3000)
    }).catch((err) => {
        setIsError(true)
        setErrorMessage(err?.response?.data?.message)
      console.log(err)
    })
  }

  
    return (
        <>
         {roleId === 1 ?         
         <Col className="d-grid p-5 align-items-center" >
              <Form>
                <h1 className="mb-3">Hubungi, Lous Tomlinson</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                 {isSubmited && <Alert variant="success">{successMessage}</Alert>}
                 {isError && <Alert variant="danger">{errorMessage}</Alert>}
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
                  <Form.Control size="lg" type="email" placeholder="Masukan alamat email"  value={detailRecruiter.email} disabled readOnly/>
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
            </Col> : <Col className="d-grid p-5 align-items-center">
                {console.log(detailHire)}
              <Form>
                <h1 className="mb-3">Hubungi, Lous Tomlinson</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <Form.Group className="mb-4" controlId="formBasicPurpose">
                  <Form.Label>Tujuan tentang pesan ini</Form.Label>
                  <Form.Control size="lg" placeholder={detailHire.messageSubject} disabled readOnly />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control size="lg" placeholder={detailRecruiter.companyName} disabled readOnly />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="lg" type="email" placeholder={detailRecruiter.email} disabled readOnly />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPhone">
                  <Form.Label>No Handphone</Form.Label>
                  <Form.Control size="lg" type="phone" placeholder={detailRecruiter.phoneNumber} disabled readOnly/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="FormTextArea">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control as="textarea" placeholder={detailHire.description} rows={8} 
                  disabled readOnly/>
                </Form.Group>
                <div className="d-grid mt-5">
                  <Button className="text-white" variant="warning" size="lg" type="submit"
                 >
                    Back
                  </Button>
                </div>
              </Form>
            </Col>}
        </>
       
    
    )
}

export default HireForm;