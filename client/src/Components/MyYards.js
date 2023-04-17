import React, {useEffect, useState} from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  MDBBtn,}
from 'mdb-react-ui-kit';
import '../App.css';
// the listings will display here!
// this is a 3 equal section grid;  the yardd cards will stack equally across.
function MyYards() {
  const [yards, setYards] = useState([])
  useEffect( ()=> {
    fetch('/api/yards').then(
      function(response) {
        return response.json()
      }
    ).then(
      function(data) {
        console.log(data);
        setYards(data);
      }
    )
  }, [])
  // return (
  //   <div>
  //     <MDBRow>
  //       {yards.map(yard=>(
  //         <MDBCol md='4'>
  //         <Card style={{ width: '18rem' }} className="yardCard">
  //         <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
  //         <Card.Body>
  //           <Card.Title>{yard.name}</Card.Title>
  //           <Card.Text>
  //            This is a quick description of the yard.
  //           </Card.Text>
  //         </Card.Body>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item>City</ListGroup.Item>
  //           <ListGroup.Item>Water? Yes or No</ListGroup.Item>
  //           <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
  //         </ListGroup>
  //       </Card>
  //         </MDBCol>
  //       ))}
  //     </MDBRow>
  //   </div>
  // )
  return (
    <div> 
    <MDBRow>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
    </MDBRow>

{/* second row */}

    <MDBRow>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }} className="yardCard">
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Yard Name</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
        <ListGroup.Item>Water? Yes or No</ListGroup.Item>
        <ListGroup.Item><MDBBtn className='w-30 mb-4 cardbtns' size='sm'  type='delete' color='warning'>Delete</MDBBtn><MDBBtn className='w-30 mb-4' size='sm'  type='delete' color='warning'>Edit  </MDBBtn></ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
    </MDBRow>


    </div>

    
    
  );
}

export default MyYards;

