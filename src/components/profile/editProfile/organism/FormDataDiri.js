import React from "react";
import { Button, Form } from "react-bootstrap";
// atom
import Input from "../atom/Input";

const FormDataDiri = () => {
  return (
    <>
      <Form className="m-5">
        {/* input name */}
        <Input
          label="Nama lengkap"
          type="text"
          placeholder="Masukan nama lengkap"
        />
        {/* input job */}
        <Input label="Job desk" type="text" placeholder="Masukan job desk" />
        {/* input domisili */}
        <Input label="Domisili" type="text" placeholder="Masukan domisili" />
        {/* input place work */}
        <Input
          label="Tempat kerja"
          type="text"
          placeholder="Masukan tempat kerja"
        />
        {/* input text area description */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tuliskan deskripsi singkat"
            className="py-3 px-3"
          />
        </Form.Group>
        {/* input skill */}
        <Input
          label="Tambah skill"
          type="text"
          placeholder="JavaScript, PHP, C++"
        />
        {/* Button */}
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

export default FormDataDiri;
