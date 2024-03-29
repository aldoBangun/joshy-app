import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/thunks/auth";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import withNoAuth from "../hoc/withNoAuth";
import AuthImage from "../components/UI/AuthImage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading.isLoading)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <div className="Login">
      <main className="bg-light w-100 vh-100 p-3">
        <Container>
          <Row className="d-flex flex-row">
            <Col className="d-grid d-none d-sm-table-cell">
              <AuthImage />
            </Col>
            <Col className="d-grid p-5 align-items-center">

              {/* form-start */}

              <Form onSubmit={submitHandler}>
                <h1 className="mb-3">Halo, Pewpeople</h1>
                <p className="mb-5">Mulai berkarir bersama Joshy</p>
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
                  <Button className="text-white" variant="warning" size="lg" type="submit" disabled={loading}>
                    {loading ? 'Mamasuki' : 'Masuk'}
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

const LoginWithNoAuth = withNoAuth(Login)
export default LoginWithNoAuth;
