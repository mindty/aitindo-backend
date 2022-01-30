import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { InputGroup, Button, Form, Spinner } from "react-bootstrap";
import "./style.css";

const AddToDo = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const { newtodo } = form;

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const newErrors = {};
    //newtodo errors
    if (!newtodo || newtodo === "") newErrors.newtodo = "cannot be blank!";

    return newErrors;
  };

  const handleAdd = (e) => {
    e.preventDefault();

    // Errors Check
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // setLoading(true);

      const data = {
        name: newtodo,
        status: "ongoing",
      };

      console.log("data1", data);

      axios
        .post("http://localhost:3001/api/addToDo", data)
        .then(() => {
          swal({
            text: "success",
            icon: "success",
          });

          console.log("data2", data);

          // setLoading(false);
        })
        .catch(() => {
          swal({
            text: "error",
            icon: "error",
          });

          // setLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <>
        <div className="container-loading d-flex justify-content-center align-items-center">
          <Spinner className="loading" animation="grow" size="sm" />
          <Spinner className="loading" animation="grow" />
          <Spinner className="loading" animation="grow" size="sm" />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <InputGroup className="input-todo mb-4">
          <Form.Control
            placeholder="what need to be done?"
            aria-label="what need to be done?"
            aria-describedby="basic-addon2"
            onChange={(e) => setField("newtodo", e.target.value.trim())}
            required
            isInvalid={!!errors.newtodo}
          />

          <Button id="button-addon2" className="bt-add" onClick={handleAdd}>
            add todo
          </Button>

          <Form.Control.Feedback type="invalid">
            {errors.newtodo}
          </Form.Control.Feedback>
        </InputGroup>
      </div>
    </>
  );
};

export default AddToDo;
