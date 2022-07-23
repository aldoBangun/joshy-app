import React from "react";
import { Button, Form } from "react-bootstrap";
// atom
import Input from "../atom/Input";
// molecules
import InputRadio from "../molecules/InputRadio";

const FormPortfolio = () => {
  return (
    <>
      <Form className="m-5">
        {/* input name aplication */}
        <Input
          label="Nama aplikasi"
          type="text"
          placeholder="Masukan nama aplikasi"
        />
        {/* input link repo */}
        <Input
          label="Link repository"
          type="text"
          placeholder="Masukan link repository"
        />
        {/* input type apliksi */}
        <InputRadio />
        {/* input upload image */}
        <Form.Group controlId="formFile" className="mb-5">
          <Form.Label className="text-muted">Upload gambar</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
        <hr />
        {/* button */}
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4">
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
