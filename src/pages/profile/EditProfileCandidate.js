import React, { useState, useEffect } from "react";
import { Card, Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// feature
import { getProfile, profileSelector } from "../../feature/ProfileSlice";
// css
import styles from "../../css/editProfile.module.css";
// organism
import FormDataDiri from "../../components/profile/editProfile/organism/FormDataDiri";
import FormExperience from "../../components/profile/editProfile/organism/FormExperience";
import FormPortfolio from "../../components/profile/editProfile/organism/FormPortfolio";
import CandidateCard from "../../components/profile/editProfile/organism/CandidateCard";

const EditProfileCandidate = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(profileSelector.selectAll);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const [key, setKey] = useState("dataDiri");

  return (
    <div>
      <div className={`bg-primary ${styles.h_content}`}></div>
      <Container>
        <Row>
          {/* Left */}
          <Col md={4}>
            <CandidateCard />
          </Col>
          {/* Right */}
          <Col md={8}>
            <Card className={`shadow ${styles.card_form}`}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="fw-bold"
              >
                {/* Form Data diri */}
                <Tab eventKey="dataDiri" title="Data Diri">
                  <FormDataDiri />
                </Tab>
                {/* Form pengalaman kerja */}
                <Tab eventKey="experience" title="Pengalaman Kerja">
                  <FormExperience />
                </Tab>
                {/* Form Portfolio */}
                <Tab eventKey="portfolio" title="Portfolio">
                  <FormPortfolio />
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditProfileCandidate;
