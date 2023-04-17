import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyYards from './MyYards';
import { MDBBtn } from 'mdb-react-ui-kit';




function HostYardListing({setPage}) {
  const [newYard, setNewYard] = useState("HostYardListing");
  const [yardName, setYardName] = useState('');
  const [cost, setCost] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [yardState, setYardState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/yards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({yardName, cost, address, city, yardState, zip})
    }).then(
      function(response) {
        return response.json()
      }
    )
    // .then(
    //   function(data) {
    //     console.log(data);
    // // redirect to main page
    //   }
    // )
  }
    

  return (
    <div onSubmit={handleSubmit}>
    <Form className="new-host-form">
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name Your Yard !</Form.Label>
        <Form.Control type="text" placeholder="i.e. Frolick Farm" value={yardName} onChange={(e) => setYardName(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCost">
        <Form.Label>Hourly Cost</Form.Label>
        <Form.Control type="number" placeholder="Enter Dollar Amount Only" value={cost} onChange={(e) => setCost(e.target.value)} />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label> State </Form.Label>
        <Form.Control placeholder='State' value={yardState} onChange={(e) => setYardState(e.target.value)}/>
      </Form.Group>
     

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control placeholder='Zip' value={zip} onChange={(e) => setZip(e.target.value)}/>
      </Form.Group>
    </Row>

    <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Yard Features</option>
        <option value="1">Fully-Fenced</option>
        <option value="2">Agility Course</option>
        <option value="3">Frolick Field</option>
        <option value="4">Arena</option>
        <option value="5">None/Other</option>
      </Form.Select>
    </FloatingLabel>
    <div>
    {/* <div>
        {newYard ? <HostYardListing  setNewYard={setNewYard} />: null}
      </div> */}
    </div>
    <MDBBtn variant="success" type="submit" id="create-yard" color='warning' 
    // onClick = {()=> setPage('HostYard')}
    >
      Save!
    </MDBBtn>
  </Form>
  </div>
  );
}

export default HostYardListing;
