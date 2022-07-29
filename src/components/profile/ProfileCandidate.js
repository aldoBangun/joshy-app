import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCandidateCover from "./ProfileCandidateCover";
import ProfileCandidateInfo from "./ProfileCandidateInfo";
import ProfileCandidateTabs from "./ProfileCandidateTabs";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileCandidate = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`/profile/${userId}`)
      .then(res => {
        setProfile(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [userId]);

  const styleContainer = { marginTop: "-10rem" };

  return (
    <>
      {profile && (
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
      )}
    </>
  );
};

export default ProfileCandidate;