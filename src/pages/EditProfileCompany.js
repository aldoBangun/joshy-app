import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
// css
import styles from "../css/editProfile.module.css";
// organism
import FormDataCompany from "../components/profile/editProfile/organism/FormDataCompany";
import CompanyCard from "../components/profile/editProfile/organism/CompanyCard";

const EditProfileCompany = () => {
  return (
    <>
      <div>
        <div className={`bg-primary ${styles.h_content}`}></div>
        <Container>
          <Row>
            <Col md={4}>
              <CompanyCard />
            </Col>
            <Col md={8}>
              <Card className={`shadow ${styles.card_form}`}>
                <h2 className="m-4">Data Profile</h2>
                <hr />
                <FormDataCompany />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditProfileCompany;
