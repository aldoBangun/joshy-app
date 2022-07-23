import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
// atom
import Input from "../atom/Input";

const FormExperience = () => {
  return (
    <>
      <Form className="m-5">
        {/* input posisi */}
        <Input label="Posisi" type="text" placeholder="Web Developer" />
        {/* input company & year */}
        <Row>
          <Col>
            <Input label="Nama perusahaan" type="text" placeholder="PT Jhosy" />
          </Col>
          <Col>
            <Input label="Tahun masuk" type="date" />
          </Col>
          <Col>
            <Input label="Tahun keluar" type="date" />
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
          />
        </Form.Group>
        <hr />
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4">
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
