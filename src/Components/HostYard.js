import { useState } from 'react';
import { FloatingLabel, Form, Button, Col, Row } from 'react-bootstrap';

const HostYardListing = () => {
  const [image, setImage] = useState('');
  const img1 = ''
  const img2 = 'https://ww1.prweb.com/prfiles/2013/10/30/11286244/Full%20Course%201.JPG'
  const img3 = 'https://media.istockphoto.com/id/827580726/photo/landscape-of-grass-field-and-green-environment-public-park-use-as-natural-background-backdrop.jpg?s=612x612&w=0&k=20&c=qUacNPfzvoW-20ELsIb9AnFeW4yOhqs5xZqjOlBODl4='
  const img4 = 'https://images.squarespace-cdn.com/content/v1/5c35741ecef37214f2bde4d5/84c50d1f-c796-49dd-99f8-15db5ddfd6e7/tempImage5NNObF.jpg?format=1000w'
  const img5 = 'https://www.outdooressentialproducts.com/-/media/OutdoorEssentialsV3/Products/Wood-Fence/Fence-Components/Pickets_LIFESTYLE.jpg'

  function handleImage(value) {
    value.toString() === "1" && setImage(img1);
    value.toString() === "2" && setImage(img2);
    value.toString() === "3" && setImage(img3);
    value.toString() === "4" && setImage(img4);
    value.toString() === "5" && setImage(img5);
  }

  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name Your Yard!</Form.Label>
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

        <FloatingLabel controlId="floatingSelect" label="Yard Features">
          <Form.Select onChange={(e) => handleImage(e.target.value)} aria-label="Floating label select example">
            <option value={1}>None/Other</option>
            <option value={2}>Agility Course</option>
            <option value={3}>Frolic Field</option>
            <option value={4}>Arena</option>
            <option value={5}>Fully-Fenced</option>
          </Form.Select>
        </FloatingLabel>
        <img style={{borderRadius: '10px'}} src={image} alt='Choose the feature above closest to your yard' height='300px' width='400px'/>
        <br />
        <Button variant="success" type="submit">
          Create!
        </Button>
      </Form>
    </div>
  );
}

export default HostYardListing;       

















