import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../../../../css/editProfile.module.css";
import ProfileEditAvatar from "../../ProfileEditAvatar";
import withRouteGuard from "../../../../hoc/withRouteGuard";

const CompanyCard = () => {
  const user = useSelector(state => state.currentUser.user)

  return (
    <>
      {user && (
        <Card className={`shadow rounded py-5 ${styles.card_profile}`}>
          <div className="px-4">
            <ProfileEditAvatar />
          </div>
          <Card.Title className="ms-4 mt-4 mb-3">{user.companyName}</Card.Title>
          <Card.Subtitle className="mb-4 text-muted ms-4">
            {user.companyField}
          </Card.Subtitle>
          <span className="text-muted ms-4 mb-3 text-black-50">
            <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
            {user.companyDomicile}
          </span>

          <div className="d-grid px-4">
            <Link to={`/profile/${user.id}`} className="btn btn-secondary">Kembali</Link>
          </div>
        </Card>
      )}
    </>
  );
};

const CompanyCardWithRouteGuard = withRouteGuard(CompanyCard)
export default CompanyCardWithRouteGuard;
