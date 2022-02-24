import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const CreateUserList = ({
  handleCloseForCreateModal,
  createShow,
  mainState,
  setMainState,
  updatedValue,
  setUpdatedValue,
  setCreateShow,
}) => {
  const onChangeName = (e) => {
    e.preventDefault();
    setUpdatedValue({
      id: mainState.length + 1,
      name: e.target.value,
      salray: updatedValue.salray,
    });
  };
  const onChangeSalary = (e) => {
    e.preventDefault();
    setUpdatedValue({
      id: mainState.length + 1,
      name: updatedValue.name,
      salray: e.target.value,
    });
  };
  const handleSubmit = () => {
    setMainState([...mainState, updatedValue]);
    setCreateShow(false);
    setUpdatedValue({
      id: "",
      name: "",
      salray: "",
    });
  };
  console.log("iuiuiuiui", updatedValue);
  return (
    <div>
      <>
        <Modal show={createShow} onHide={handleCloseForCreateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create User Details</Modal.Title>
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
            <Button variant="secondary" onClick={handleCloseForCreateModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default CreateUserList;
