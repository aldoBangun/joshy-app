import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// css
import styles from "../../../css/landing.module.css";

const CardCaraousel = (props) => {
  const { data } = props;
  const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoibG9lYmlzLnRlY2hAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjUyNDg4L3cxbjZtcGZ5cmY2cWdkZ282dXZ0LmpwZyIsImNvdmVySW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjUyNDg4L2d3MW0wY2xtNTNweG1sbW5xd21vLmpwZyIsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjY1ODUxLCJleHAiOjE2NTg3NTIyNTF9.E5BZx7PY3sVYt-iKkeyhNnLKlvTWG_EJqXRLSQKmYWc`}
    }
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
        axios.get(`https://joshy-app.herokuapp.com/profile/${data.userId}`, config)
        .then((res) => {
          setUserInfo(res.data)
        })
  }, [data])

  return (
    <>
      <Card className={`${styles.card_caraousel}`}>
        <Card.Img
          variant="top"
          src={userInfo?.profilePicture}
          className="rounded-circle border border-5 border-warning mb-2 mt-5"
          crossOrigin="anonymous"
        />
        <Card.Body>
          <Card.Title className="text-center mb-3 fs-3">
            {"name" in userInfo && userInfo.name}
            {"companyName" in userInfo && userInfo.companyName}
          </Card.Title>
          <Card.Subtitle className="mb-3 text-muted text-center">
            {"job" in userInfo && userInfo.job}
            {"companyField" in userInfo && userInfo.companyField}
          </Card.Subtitle>
          <Card.Text className="text-center mb-5">
            {data.testimonialMessage}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCaraousel;
