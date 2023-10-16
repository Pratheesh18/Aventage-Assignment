import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: "",
    birthday: "",
    contactNo: "",
    nic: "",
    notes: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients",
        patient
      );
      console.log("New Patient created", response.data);
      handleClose();
    } catch (error) {
      console.error("Error in creating patient", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Add Patient
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={patient.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="birthday">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="text"
                name="birthday"
                value={patient.birthday}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="contactNo">
              <Form.Label>Contact Number:</Form.Label>
              <Form.Control
                type="text"
                name="contactNo"
                value={patient.contactNo}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="nic">
              <Form.Label>NIC:</Form.Label>
              <Form.Control
                type="text"
                name="nic"
                value={patient.nic}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>Notes:</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                value={patient.notes}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Patient
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPatient;
