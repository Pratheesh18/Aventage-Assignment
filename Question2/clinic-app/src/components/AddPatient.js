import React , {useState} from 'react';
import { Button , Modal , Form } from 'react-bootstrap';
import axios from 'axios'


const AddPatient = () => {
    const [patient , setPatient] = useState({
        name : '',
        birthday : '',
        contactNo : '',
        nic : '',
        notes : '',
    });

    const [showModal , setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setPatient({...patient , [name] : value});
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            
            const response = await axios.post('http://localhost:5000/api/patients' , patient);
            console.log('New Patient created' , response.data);
            closeModal();
        }catch(error){
            console.error('Error in creating patient' , error);
        }
};


return(
    <div>
        <Button onClick={openModal}> Add Patient </Button>
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>  Add New Patient </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='name'>
                        <Form.Label> Name :  </Form.Label>
                        <Form.Control type="text" name="name" value={patient.name} onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
)

}
