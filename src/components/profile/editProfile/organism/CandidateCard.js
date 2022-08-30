import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//feature
import {
  getProfile,
  profileSelector,
  updateProfilePicture,
} from "../../../../feature/ProfileSlice";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// css
import styles from "../../../../css/editProfile.module.css";

const CandidateCard = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const profile = useSelector((state) => profileSelector.selectById(state, id));
  const profile = useSelector(profileSelector.selectAll);

  useEffect(() => {
    dispatch(getProfile());
  }, [profile]);

  // useEffect(() => {
  //   if (profile) {
  //     setProfilePicture(profile.profilePicture);
  //   }
  // }, [profile]);

  // const updatePicture = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("profilePicture", profilePicture);
  //   await dispatch(
  //     updateProfilePicture({
  //       id,
  //       profilePicture,
  //     })
  //   );
  // };

  // const profiled = profile;

  return (
    <>
      {/* <Form onSubmit={updatePicture}>
        <div className={styles.custome_file_upload}>
          <span className="text-muted">
            <FontAwesomeIcon icon={faPen} className="text-primary me-2" />
            Edit
          </span>
          <input
            type="file"
            className={styles.hide_file}
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
      <div className={`d-grid gap-2 px-3 ms-5 ${styles.button_add_photo}`}>
        <Button variant="primary" className="py-2 fw-bold mt-4" type="submit">
          Simpan foto profile
        </Button>
        <Button variant="secondary" className="py-2 fw-bold">
          Batal
        </Button>
      </div>
      </Form> */}
      <Card className={`ms-5 shadow rounded py-5 ${styles.card_profile}`}>
        <Card.Img
          variant="top"
          className="rounded-circle mt-4 border border-4 border-warning"
          src={profile.profilePicture}
        />
        <Card.Title className="ms-4 mt-4 mb-2">Jafar</Card.Title>
        <Card.Subtitle className="mb-4 text-muted ms-4">
          Web Developer
        </Card.Subtitle>
        <span className="text-muted ms-4 mb-3 text-black-50">
          <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
          Tangerang
        </span>
        <span className="text-muted ms-4 text-black-50">Freelancer</span>
      </Card>
      {/* Button */}
    </>
  );
};

export default CandidateCard;
