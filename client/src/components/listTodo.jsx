import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Form, Button, Modal, Spinner } from "react-bootstrap";

import "./style.css";

const ListToDo = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { todos } = form;

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
    //todos errors
    if (!todos || todos === "") newErrors.todos = "cannot be blank!";

    return newErrors;
  };

  const [loading, setLoading] = useState(false);

  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Errors Check
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
    }
  };

  const handleDel = (e) => {
    e.preventDefault();
    setLoading(true);
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
      <div className="container-list">
        <div className="title-list">List ToDo</div>

        <div className="row">
          <div className="list-todo col-md-10 col-sm-5">
            <Form>
              <div key="default-checkbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  className="cek-list"
                  label="default checkbox"
                />
              </div>
            </Form>
          </div>

          <div
            className="icon-list col-md-1 col-sm-1"
            onClick={handleShowUpdate}
          >
            <BiEdit />
          </div>

          <div className="icon-list col-md-1 col-sm-1" onClick={handleShowDel}>
            <RiDeleteBinFill />
          </div>
        </div>

        {/* Modal Edit ToDo */}
        <Modal
          show={showUpdate}
          onHide={handleCloseUpdate}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
            <div>
              <div className="edit-todo">
                <p> Edit To Do : </p>
              </div>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder=" write here ..."
                  onChange={(e) => setField("todos", e.target.value.trim())}
                  required
                  isInvalid={!!errors.todos}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.todos}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="divButton mt-5 d-flex justify-content-center align-items-center">
                <Button
                  className="me-2 btCancel"
                  variant="secondary"
                  onClick={handleCloseUpdate}
                >
                  Cancel
                </Button>

                <Button className="btEdit" onClick={handleUpdate}>
                  Update
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Delete ToDo */}
        <Modal
          show={showDel}
          onHide={handleCloseDel}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
            <div>
              <p> Are you sure to delete this to do ? </p>

              <div className="divButton mt-5 d-flex justify-content-center align-items-center">
                <Button
                  className="me-2 btCancel"
                  variant="secondary"
                  onClick={handleCloseDel}
                >
                  Cancel
                </Button>

                <Button
                  className="btEdit"
                  variant="danger"
                  // onClick={handleDelProduct}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default ListToDo;
