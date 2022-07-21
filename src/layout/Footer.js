import React from "react";
// css
import styles from "../css/footer.module.css";
const Footer = () => {
  return (
    <>
      <footer
        className={`bg-primary d-flex justify-content-center mt-5 ${styles.d_footer}`}
      >
        <div className="my-5">
          <h1 className="text-warning mb-4">Jhosy</h1>
          <span className="text-white d-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </span>
          <hr size="7" className="bg-light" />
          <p className="float-end ms-5 mt-4 text-white">Email</p>
          <p className="float-end me-5 mt-4 text-white">Telepon</p>
          <p className="mt-4 text-white">2022 Jhosy. All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
