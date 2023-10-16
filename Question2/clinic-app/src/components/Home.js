import React, { useState } from "react";
import AddPatient from "./AddPatient";
import { Button } from "react-bootstrap";

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
      {/* <Button variant='primary' onClick={openModal}>Add Patient</Button> */}
       <AddPatient show={showModal} handleClose={closeModal} />
    </div>
  );
};

export default Home;
