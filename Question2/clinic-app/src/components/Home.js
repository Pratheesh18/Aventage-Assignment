import React, { useState , useEffect } from "react";
import AddPatient from "./AddPatient";
import {  Container , Card , Row , Col } from "react-bootstrap";
import './Home.css';
import axios from "axios";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [patients , setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((response) => {
      setPatients(response.data);
    });
  }, []);

  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Welcome, Doctor</h2>
       <AddPatient show={showModal} handleClose={closeModal} />
       <Container>
      <Row>
        {patients.map((patient) => (
          <Col key={patient._id} sm={12} md={6} lg={4} xl={3}>
            <Card style={{marginBottom:"20px"}}>
              <Card.Body>
                <Card.Title>{patient.name}</Card.Title>
                <Card.Text>
                  <strong>Birthday:</strong> {patient.birthday}
                </Card.Text>
                <Card.Text>
                  <strong>Contact Number:</strong> {patient.contactNo}
                </Card.Text>
                <Card.Text>
                  <strong> Nic :</strong> {patient.nic}
                </Card.Text>
                <Card.Text>
                  <strong> Notes :</strong> {patient.notes}
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Home;
