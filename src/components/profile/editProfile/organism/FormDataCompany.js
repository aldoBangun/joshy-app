import React from "react";
import { Form, Button } from "react-bootstrap";
// atom
import Input from "../atom/Input";

const FormDataCompany = () => {
  return (
    <>
      <Form className="mx-5 my-3">
        {/* input name */}
        <Input
          label="Nama perusahaan"
          type="text"
          placeholder="Masukan nama perusahaan"
        />
        {/* input bidang */}
        <Input
          label="Bidang"
          type="text"
          placeholder="Masukan bidang perusahaan ex : Financial"
        />
        {/* input kota */}
        <Input label="Kota" type="text" placeholder="Masukan kota" />
        {/* text area description*/}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tuliskan deskripsi singkat"
            className="py-3 px-3"
          />
        </Form.Group>
        {/* input email */}
        <Input label="Email" type="email" placeholder="Masukan email" />
        {/* input instagram */}
        <Input
          label="Instagram"
          type="text"
          placeholder="Masukan nama instagram"
        />
        {/* input phone number */}
        <Input
          label="Nomor telepon"
          type="number"
          placeholder="Masukan nomor telepon"
        />
        {/* input linkedin */}
        <Input
          label="Linkedin"
          type="text"
          placeholder="Masukan nama linkedin"
        />
        {/* Button */}
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-3">
            Simpan
          </Button>
          <Button variant="secondary" className="py-3 fw-bold mb-4">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormDataCompany;
