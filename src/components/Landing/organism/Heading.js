import React from "react";
// css
import styles from "../../../css/landing.module.css";
//image
import headImg from "../../../images/home.png";

const Heading = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={`row ${styles.row_content}`}>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center px-5">
            <div className="px-5">
              <h1 className={`mx-5 mb-4 lh-base ${styles.text_heading}`}>
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="fs-5 text-muted mx-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <button
                type="button"
                class="btn btn-primary py-3 px-5 fw-bold mx-5 mt-5"
              >
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center d-flex align-items-center">
            <div className={styles.rectangle_xlarge}>
              <img src={headImg} />
            </div>
            <div
              className={`position-absolute bg-primary ${styles.rectangle_medium}`}
            >
              <div
                className={`position-absolute bg-warning ${styles.rectangle_xsmall}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;