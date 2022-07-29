import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// feature
import {
  getProfile,
  profileSelector,
  saveWorkPlace,
} from "../../../../feature/ProfileSlice";
// atom
import Input from "../atom/Input";

const FormExperience = () => {
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { id } = useParams();

  const profile = useSelector(() => profileSelector.selectAll);

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setPosition(profile.position);
      setCompanyName(profile.companyName);
      setStartDate(profile.startDate);
      setEndDate(profile.endDate);
      setDescription(profile.description);
    }
  }, [profile]);

  const addWorkPlace = async (e) => {
    e.preventDefault();
    await dispatch(
      saveWorkPlace({
        position,
        companyName,
        startDate,
        endDate,
        description,
      })
    );
    // navigate('/profile')
  };

  return (
    <>
      <Form className="m-5" onSubmit={addWorkPlace}>
        {/* input posisi */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Posisi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Web developer"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        {/* input company & year */}
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">
                Nama perusahaan
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="PT Jhosy"
                size="sm"
                className="py-3 px-5 text-sm"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">Tahun masuk</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                className="py-3 px-5 text-sm"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">Tahun keluar</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                className="py-3 px-5 text-sm"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* input text area description */}
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Deskripsikan pekerjaan anda"
            className="py-3 px-3"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <hr />
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit">
            Tambah pengalaman kerja
          </Button>
          <Button variant="secondary" className="py-3 fw-bold">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormExperience;
