import React, { useState, useEffect } from "react";
import AddPatient from '../AddPatient/AddPatient';
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import './Home.css';
import axios from "axios";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    // Fetch all patients when the component loads initially
    axios.get("http://localhost:5000/api/patients").then((response) => {
      if(Array.isArray(response.data)){setPatients(response.data)};
    });
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = async () => {
    try {
      // Make a GET request to search for patients by name
      const response = await axios.get("http://localhost:5000/api/patients", {
        params: { name: searchQuery },
      });
      setPatients(response.data);
    } catch (error) {
      console.error("Error searching for patients", error);
    }
  };

  const handleDelete = async(patientId) => {
    try{
      await axios.delete(`http://localhost:5000/api/patients/${patientId}`);
      setPatients((prevPatients) => {
        return prevPatients.filter((patient) => patient._id !== patientId)
      });
      console.log("Patient deleted successfully");
      

    }catch(error){
      console.error("Error deleting patient" , error);
    }
  }

  return (
    <div>
      <h2>Welcome, Doctor</h2>
      <AddPatient show={showModal} handleClose={closeModal} />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            {/* <Form.Control
              type="text"
              placeholder="Search by Patient Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            /> */}
          </Col>
          <Col xs={12} md={2}>
            {/* <Button onClick={handleSearch}>Search</Button> */}
          </Col>
        </Row>
        <Row>
          {patients.map((patient) => (
            <Col key={patient._id} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{patient.name}</Card.Title>
                  <Card.Text>
                    <strong>Birthday:</strong> {patient.birthday}
                  </Card.Text>
                  <Card.Text>
                    <strong>Contact Number:</strong> {patient.contactNo}
                  </Card.Text>
                  <Card.Text>
                    <strong>NIC:</strong> {patient.nic}
                  </Card.Text>
                  <Card.Text>
                    <strong>Notes:</strong> {patient.notes}
                  </Card.Text>
                  <Button onClick={() => handleDelete(patient._id)} > Delete  </Button>
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
