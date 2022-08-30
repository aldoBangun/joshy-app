import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// feature
import {
  profileSelector,
  savePortofolio,
} from "../../../../feature/ProfileSlice";
// atom
import Input from "../atom/Input";
// molecules
import InputRadio from "../molecules/InputRadio";

const FormPortfolio = () => {
  const [appName, setAppName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [appPicture, setAppPicture] = useState(null);
  //state input radio
  const [radioTypeApp, setRadioTypeApp] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(() => profileSelector.selectAll);

  useEffect(() => {
    setAppName(profile.appName);
    setLink(profile.link);
    setType(profile.type);
    setAppPicture(profile.appPicture);
  }, [profile]);

  const addPortofolio = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("appName", appName);
    formData.append("link", link);
    formData.append("type", type);
    formData.append("appPicture", appPicture);
    await dispatch(
      savePortofolio({
        appName,
        link,
        type,
        appPicture,
      })
    );
    // navigate('/profile')
  };

  return (
    <>
      <Form className="m-5" onSubmit={addPortofolio}>
        {/* input name aplication */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Nama aplikasi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama apliksi"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setAppName(e.target.value)}
          />
        </Form.Group>
        {/* input link repo */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Link repository</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan link repository"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>
        {/* input type apliksi */}
        <Row className="mb-2">
          <Col lg={3}>
            <p className="text-right text-label tex-muted">Type aplikasi</p>
          </Col>
          <Col lg={2}>
            <Form.Check
              label="Aplikasi Web"
              id="radio-web"
              name="radio-1"
              type="radio"
              checked={radioTypeApp === 1 ? true : false}
              onClick={() => {
                setRadioTypeApp(1);
              }}
              value="web"
              onChange={(e) => setType(e.target.value)}
            />
          </Col>
          <Col lg={4}>
            <Form.Check
              label="Aplikasi Mobile"
              id="radio-mobile"
              name="radio-2"
              type="radio"
              checked={radioTypeApp === 2 ? true : false}
              onClick={() => {
                setRadioTypeApp(2);
              }}
              value="mobile"
              onChange={(e) => setType(e.target.value)}
            />
          </Col>
        </Row>
        {/* input upload image */}
        <Form.Group controlId="formFile" className="mb-5">
          <Form.Label className="text-muted">Upload gambar</Form.Label>
          <Form.Control
            type="file"
            size="lg"
            onChange={(e) => setAppPicture(e.target.files[0])}
          />
        </Form.Group>
        <hr />
        {/* button */}
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit">
            Simpan
          </Button>
          <Button variant="secondary" className="py-3 fw-bold">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormPortfolio;
