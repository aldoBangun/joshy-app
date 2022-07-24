import React from "react";
//css
import styles from "../../../css/landing.module.css";
//image
import articleImgTwo from "../../../images/articleTwo.png";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SectionTwo = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={`row ${styles.row_content}`}>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center px-5">
            <div className="mx-5 px-5">
              <h1>Skill talent</h1>
              <p className="text-muted fs-5 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <div className="row">
                <div className="col-6 ps-5">
                  <div className="d-flex flex-column">
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      Java
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      Kotlin
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      PHP
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      JavaScript
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      Golang
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      C++
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      Ruby
                    </span>
                    <span className="mb-5 text-muted">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        className="me-3 text-warning"
                      />
                      10 + Bahasa lainnya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center">
            <div className={styles.box_img_two}>
              <img src={articleImgTwo} alt="articles" />
            </div>
            <div
              className={`bg-warning position-absolute ${styles.box_articleTwo}`}
            ></div>
            {/* <div
                className={`bg-primary position-absolute ${styles.rectangle_small}`}
              ></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
