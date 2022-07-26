import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCandidateCover from "./ProfileCandidateCover";
import ProfileCandidateInfo from "./ProfileCandidateInfo";
import ProfileCandidateTabs from "./ProfileCandidateTabs";

const ProfileCandidate = (props) => {
  const { profile } = props;
  const styleContainer = {
    marginTop: "-10rem",
  };

  return (
    <>
      <ProfileCandidateCover coverImage={profile.coverImage} />
      <Container style={styleContainer}>
        <Row>
          <Col lg={4}>
            <ProfileCandidateInfo {...profile} />
          </Col>
          <Col lg={8}>
            <ProfileCandidateTabs />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileCandidate;
