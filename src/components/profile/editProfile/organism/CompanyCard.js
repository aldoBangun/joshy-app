import React from "react";
import { Card, Form } from "react-bootstrap";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// css
import styles from "../../../../css/editProfile.module.css";

const CompanyCard = () => {
  return (
    <>
      <Card className={`ms-5 shadow rounded py-5 ${styles.card_profile}`}>
        <Card.Img
          variant="top"
          className="rounded-circle mt-4 border border-4 border-warning"
          src="https://c4.wallpaperflare.com/wallpaper/26/331/805/one-piece-anime-monkey-d-luffy-wallpaper-thumb.jpg"
        />
        <div className={styles.custome_file_upload}>
          <span className="text-muted">
            <FontAwesomeIcon icon={faPen} className="text-primary me-2" />
            Edit
          </span>
          <Form>
            <input type="file" className={styles.hide_file} />
          </Form>
        </div>
        <Card.Title className="ms-4 mt-4 mb-3">PT Jhosy</Card.Title>
        <Card.Subtitle className="mb-4 text-muted ms-4">
          Recruitment
        </Card.Subtitle>
        <span className="text-muted ms-4 mb-3 text-black-50">
          <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
          Singapore
        </span>
      </Card>
    </>
  );
};

export default CompanyCard;
