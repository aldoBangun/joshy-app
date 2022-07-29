import React from "react";
import RadioButton from "../atom/RadioButton";
import { Row, Col, Form } from "react-bootstrap";

function InputRadio() {
  const [radioTypeApp, setRadioTypeApp] = React.useState(null);

  return (
    <Form>
      <Row className="mb-2">
        <Col lg={3}>
          <p className="text-right text-label tex-muted">Type aplikasi</p>
        </Col>
        <Col lg={2}>
          <Form.Check
            label="Aplikasi Web"
            id="radio-web"
            name="radio-1"
            checked={radioTypeApp === 1 ? true : false}
            onClick={() => {
              setRadioTypeApp(1);
            }}
          />
        </Col>
        <Col lg={4}>
          <Form.Check
            label="Aplikasi Mobile"
            id="radio-mobile"
            name="radio-2"
            checked={radioTypeApp === 2 ? true : false}
            onClick={() => {
              setRadioTypeApp(2);
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default InputRadio;
