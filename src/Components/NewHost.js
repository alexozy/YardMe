import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MyYards from './MyYards';
import UserLogin from './UserLogin';
import HostYardListing from './HostYard';


function NewHost() {
  const [page, setPage] = useState("NewHost")
  function Create() {
    if (page === "NewHost") {
      return (
  <div>
       <NewHost/>
  </div>
)
} else if (page === "MyYards") {
    return (
        <div>
            <MyYards/>
        </div>
    )
} else if (page === "UserLogin") {
    return (
        <div>
            <UserLogin/>
        </div>
    )
} else if (page === "HostYard") {
    return (
        <div>
            <HostYardListing/>
        </div>
    )
}
} 
  return (
    
           <div className="user-login">
   
    
    <MDBContainer fluid className='p-4 user-header overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Create New Host Account</h1>


        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Full Name' id='form3' type='name'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password'/>
          

              <MDBBtn className='w-100 mb-4' size='md'  color='warning' onClick = {()=> setPage('MyYards')}
              //make function that if there are no yard it displays 'You have no yards yet' 
              >Create Account</MDBBtn>
              {/* <MDBBtn className='w-100 mb-4' size='md'  color='warning' onClick = {()=> setPage('HostYard')}>Add Yard</MDBBtn> */}
             
              <div className="text-center">
             
              </div>
             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    {Create()}
    </div>
  );
}

export default NewHost;