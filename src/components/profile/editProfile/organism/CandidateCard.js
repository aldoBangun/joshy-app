import { Card} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../../../../css/editProfile.module.css";
import ProfileEditAvatar from "../../ProfileEditAvatar";
import withRouteGuard from "../../../../hoc/withRouteGuard";

const CandidateCard = () => {
  const profile = useSelector(state => state.currentUser.user);

  return (
    <>
      {
        profile && (
          <Card className={`shadow rounded p-3 ${styles.card_profile}`}>
            <div className="px-4">
              <ProfileEditAvatar />
            </div>
            
            <Card.Title className="mt-4 mb-2">{profile.name}</Card.Title>
            
            {profile.job && (<Card.Subtitle className="mb-4 text-muted">
              {profile.job}
            </Card.Subtitle>)}
            
            <span className="text-muted mb-3 text-black-50">
              <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
              {profile.domicile ? profile.domicile : 'No Location'}
            </span>
            
            {profile.workPlace && (<span className="text-muted text-black-50 d-block mb-3">{profile.workPlace}</span>)}

            <div className="d-grid">
              <Link to={`/profile/${profile.id}`} className="btn btn-secondary">Kembali</Link>
            </div>
          </Card>
        )
      }
    </>
  );
};

const CandidateCardWithRouteGuard = withRouteGuard(CandidateCard)
export default CandidateCardWithRouteGuard;
