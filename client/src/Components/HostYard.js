import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyYards from './MyYards';
//test test
function HostYardListing(setYards, setIsLoggedIn, setPage, ) {
  const [newYard, setNewYard] = useState("HostYardListing");
  return (
    <div>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name Your Yard !</Form.Label>
        <Form.Control type="text" placeholder="i.e. Frolick Farm" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCost">
        <Form.Label>Hourly Cost</Form.Label>
        <Form.Control type="number" placeholder="Enter Dollar Amount Only" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label> State </Form.Label>
        <Form.Control />
      </Form.Group>
     

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
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
    <Button variant="success" type="submit"  onClick = {()=> setPage('MyYards')}>
      Create!
    </Button>
  </Form>
  </div>
  );
}

export default HostYardListing;
