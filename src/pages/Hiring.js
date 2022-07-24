import React from "react";
import { Container, Row } from "react-bootstrap";
import HireUserDetails from "../components/hires/HireUserDetails";
import HireForm from "../components/hires/HireForm";


const Hiring = () => {
  return (
    <>
      <main className="bg-light w-100 p-3">
        <Container>
            <Row className="d-flex flex-row">
                <HireUserDetails/>
                <HireForm/>
            </Row>
        </Container>
      </main>
    </>
  )
}

export default Hiring;
