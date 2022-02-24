import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
const EditUserDetails = ({
  show,
  handleClose,
  handleShow,
  setUpdatedValue,
  updatedValue,
  mainState,
  setMainState,
  setShow
}) => {
  const onChangeName = (e) => {
    e.preventDefault();
    setUpdatedValue({
      id: updatedValue.id,
      name: e.target.value,
      salray: updatedValue.salray,
    });
  };
  const onChangeSalary = (e) => {
    e.preventDefault();
    setUpdatedValue({
      id: updatedValue.id,
      name: updatedValue.name,
      salray: e.target.value,
    });
  };
  const handleSubmit = () => {
      let removedValue =mainState.filter(k=> k.id !==updatedValue.id);
      setMainState([...removedValue,updatedValue]);
      setShow()
      setUpdatedValue({
        id: "",
        name: "",
        salray: "",
      });
      
  };
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedValue.name}
                onChange={(e) => onChangeName(e)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                value={updatedValue.salray}
                onChange={(e) => onChangeSalary(e)}
                placeholder="Enter Your Salary"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default EditUserDetails;
