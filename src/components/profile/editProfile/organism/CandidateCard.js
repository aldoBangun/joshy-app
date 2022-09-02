import { Card} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../css/editProfile.module.css";

const CandidateCard = () => {
  const profile = useSelector(state => state.currentUser.user);

  return (
    <>
      {
        profile && (
          <Card className={`ms-5 shadow rounded py-5 ${styles.card_profile}`}>
            <Card.Img
              variant="top"
              className="rounded-circle mt-4 border border-4 border-warning"
              src={profile.profilePicture}
            />
            <Card.Title className="ms-4 mt-4 mb-2">{profile.name}</Card.Title>
            {profile.job && (<Card.Subtitle className="mb-4 text-muted ms-4">
              {profile.job}
            </Card.Subtitle>)}
            <span className="text-muted ms-4 mb-3 text-black-50">
              <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
              {profile.domicile ? profile.domicile : 'No Location'}
            </span>
            {profile.workPlace && (<span className="text-muted ms-4 text-black-50">{profile.workPlace}</span>)}
          </Card>
        )
      }
    </>
  );
};

export default CandidateCard;
