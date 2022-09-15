import React from "react";
//css
import styles from "../../../css/landing.module.css";
// image
import articleImgOne from "../../../images/articleOne.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SectionOne = () => {
  return (
    <>
      <div className={`${styles.content} py-3`}>
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
                di <b className="text-primary ms-1">Joshy</b>
              </h1>
              <div className="d-flex flex-column">
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lebih dari 1000 perusahaan sudah bekerja sama dengan terdaftar
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Lebih dari 200.000 talent yang siap bekerja
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Sistem aplikasi yang mudah digunakan
                </span>
                <span className="mb-5 text-muted">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    className="me-3 text-primary"
                  />
                  Customer Service yang siap membantu 24/7
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
