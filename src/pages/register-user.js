import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterUser = () => {
  return (
    <div className="Login">
      <main className="bg-light w-100 p-3">
        <Container>
          <Row className="d-flex flex-row">
            <Col className="d-grid d-none d-sm-table-cell">
              <img src="https://s3-alpha-sig.figma.com/img/6a5f/6308/b9de1e2e658498c339524384fbdc112d?Expires=1659312000&Signature=BysvwnN3EAnxMbPPnKRL8kyoKvvORuL1HtOOQhiCoWUesTQBjksoKssWtZ8RqrSkNwngmZGe9PI3uCVV30NmznWAe~9ZviS-EezkqS7ntahaEOnyQHBZ4z23flIVufSF~dK9gMYtMf3WvE8A8P6pjBJnWAWI6NBnlbP83PS~uY~vvhze7003wL4nJ-81ARctad6-RSpbKlo3r7V3QwhX3n1Hitu8bqhxlNSgC1jv4LQ56E5XHh5xWR-H8m1d91SQa~ukBnsNk9cmt9TzTFnkLjluhyzeemABRF0dJaeNJVSKET8yPpGoBCCqHq7uYhCQgBzcTjMhxpDPXdQ-Ce3Vng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="img-fluid rounded" alt="" />
            </Col>
            <Col className="d-grid p-5 align-items-center">
              <Form>
                <h1 className="mb-3">Halo, Pewpeople</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control size="lg" placeholder="Masukan nama panjang" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Masukan alamat email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPhone">
                  <Form.Label>No Handphone</Form.Label>
                  <Form.Control size="lg" type="phone" placeholder="Masukan no handphone" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control size="lg" type="password" placeholder="Masukan kata sandi" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicRePassword">
                  <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                  <Form.Control size="lg" type="password" placeholder="Masukan konfirmasi kata sandi" />
                </Form.Group>
                <div className="d-grid">
                  <Button className="text-white" variant="warning" size="lg" type="submit">
                    Daftar
                  </Button>
                </div>
                <Form.Group className="mt-4 text-center" controlId="loginAccount">
                  <Form.Label>
                    Anda sudah punya akun?
                    <a href="/login" className="text-decoration-none fw-bold text-warning">
                      Masuk disini
                    </a>
                  </Form.Label>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default RegisterUser;
