import React from "react";
//css
import styles from "../../../css/landing.module.css";
// image
import articleImgOne from "../../../images/articleOne.png";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SectionOne = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={`row ${styles.row_content}`}>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center">
            <div className={styles.rectangle_large}>
              <img src={articleImgOne} alt="articles" />
            </div>
            <div
              className={`bg-primary position-absolute ${styles.rectangle_small}`}
            ></div>
          </div>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center">
            <div>
              <h1 className="my-5 lh-base">
                Kenapa harus mencari talent <br />
                di <b className="text-primary ms-1">JHOSY</b>
              </h1>
              <div className="d-flex flex-column">
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
