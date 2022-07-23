import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const {
    label: labelInput,
    type: typeInput,
    placeholder: placeholderInput,
  } = props;
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-muted fs-6">{labelInput}</Form.Label>
        <Form.Control
          type={typeInput}
          placeholder={placeholderInput}
          size="sm"
          className="py-3 px-5 text-sm"
        />
      </Form.Group>
    </>
  );
};

export default Input;
