import React from "react";
import styles from "../../css/landing.module.css";
// react bootstrap
import { Carousel, Card, Button, Container, Row } from "react-bootstrap";
// image
import headImg from "../../images/home.png";
import articleImgOne from "../../images/articleOne.png";
import articleImgTwo from "../../images/articleTwo.png";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// moleculse
import CardCaraousel from "../../components/Landing/molecules/CardCaraousel";
// organism
import Heading from "../../components/Landing/organism/Heading";
import SectionOne from "../../components/Landing/organism/SectionOne";
import SectionTwo from "../../components/Landing/organism/SectionTwo";
import SectionThree from "../../components/Landing/organism/SectionThree";

const Landing = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0 over overflow-hidden">
        <Heading />
        {/* article one */}
        <SectionOne />

        {/* article two */}
        <SectionTwo />
        {/* article 3 */}
        <SectionThree />
      </div>
    </>
  );
};

export default Landing;
