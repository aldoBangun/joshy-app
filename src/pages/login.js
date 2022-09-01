import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/thunks/auth";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    const { token } = authSelector

    if (token) {
      navigate("/")
    }
  }, [navigate, authSelector])

  return (
    <div className="Login">
      <main className="bg-light w-100 vh-100 p-3">
        <Container>
          <Row className="d-flex flex-row">
            <Col className="d-grid d-none d-sm-table-cell">
              <img src="https://s3-alpha-sig.figma.com/img/6a5f/6308/b9de1e2e658498c339524384fbdc112d?Expires=1659312000&Signature=BysvwnN3EAnxMbPPnKRL8kyoKvvORuL1HtOOQhiCoWUesTQBjksoKssWtZ8RqrSkNwngmZGe9PI3uCVV30NmznWAe~9ZviS-EezkqS7ntahaEOnyQHBZ4z23flIVufSF~dK9gMYtMf3WvE8A8P6pjBJnWAWI6NBnlbP83PS~uY~vvhze7003wL4nJ-81ARctad6-RSpbKlo3r7V3QwhX3n1Hitu8bqhxlNSgC1jv4LQ56E5XHh5xWR-H8m1d91SQa~ukBnsNk9cmt9TzTFnkLjluhyzeemABRF0dJaeNJVSKET8yPpGoBCCqHq7uYhCQgBzcTjMhxpDPXdQ-Ce3Vng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="img-fluid rounded" alt="" />
            </Col>
            <Col className="d-grid p-5 align-items-center">

              {/* form-start */}

              <Form onSubmit={submitHandler}>
                <h1 className="mb-3">Halo, Pewpeople</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>

                  <Form.Control onChange={(e)=> setEmail(e.target.value)} size="lg" type="email" placeholder="Masukan alamat email" />

                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Kata Sandi</Form.Label>

                  <Form.Control onChange={(e) => setPassword(e.target.value)} size="lg" type="password" placeholder="Masukan kata sandi" />

                </Form.Group>
                <Form.Group className="mb-4" controlId="forgotPassword">
                  <Form.Label>
                    <a href="/forgot-password" className="text-decoration-none text-black">
                      Lupa kata sandi?
                    </a>
                  </Form.Label>
                </Form.Group>
                <div className="d-grid">
                  <Button className="text-white" variant="warning" size="lg" type="submit">
                    Masuk
                  </Button>
                </div>

                {/* form-end */}

                <Form.Group className="mt-4 text-center" controlId="registerAccount">
                  <Form.Label>
                    Anda belum punya akun?
                    <Link to="/register-user" className="text-decoration-none fw-bold text-warning">
                      Daftar disini
                    </Link>
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

export default Login;
