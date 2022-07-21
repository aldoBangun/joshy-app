import React from "react";
import { Card } from "react-bootstrap";
// css
import styles from "../../../css/landing.module.css";

const CardCaraousel = (props) => {
  const { src: inputSrc, title: inputTitle, subtitle: inputSubtitle } = props;
  return (
    <>
      <Card className={`${styles.card_caraousel}`}>
        <Card.Img
          variant="top"
          src={inputSrc}
          className="rounded-circle border border-5 border-warning mb-2 mt-5"
        />
        <Card.Body>
          <Card.Title className="text-center mb-3 fs-3">
            {inputTitle}
          </Card.Title>
          <Card.Subtitle className="mb-3 text-muted text-center">
            {inputSubtitle}
          </Card.Subtitle>
          <Card.Text className="text-center mb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCaraousel;
