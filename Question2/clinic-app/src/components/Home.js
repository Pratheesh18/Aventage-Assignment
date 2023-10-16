import React, { useState } from "react";
import Link from "react-router-dom";
import AddPatient from "./AddPatient";
import { Button, Modal, Form } from "react-bootstrap";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Welcome, Doctor</h2>
      <h2>Welcome, Doctor</h2>
      <Button variant='primary' onClick={openModal}>Add Patient</Button>
      <AddPatient showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Home;
