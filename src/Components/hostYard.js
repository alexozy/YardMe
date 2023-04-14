import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HostYardListing() {
  return (
    <div>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name Your Yard !</Form.Label>
        <Form.Control type="email" placeholder="i.e. Frolic Farm" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Hourly Cost</Form.Label>
        <Form.Control type="password" placeholder="Enter Dollar Amount Only" />
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
      <Form.Group as={Col} controlId="formGridCity">
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

    <Button variant="success" type="submit">
      Create!
    </Button>
  </Form>
  </div>
  );
}

export default HostYardListing;
