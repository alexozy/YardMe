import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import HostYardListing from './HostYard';



function NewHost({setIsLoggedIn, setPage}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  // const [newYard, setNewYard] = useState('HostYardListing');
  const [isLoggedOut, setIsLoggedOut] = useState(true);
        
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log (email);
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
          <form onSubmit={handleSubmit}>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' value={name} onChange={(e) => setName(e.target.value)}  name='name' label='Full Name' id='newName' type='name'/>
                </MDBCol>
              </MDBRow>
           
              <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' id='newEmail' type='email'/>
              <MDBInput wrapperClass='mb-4' value={pass} onChange={(e) => setPass(e.target.value)} label='Password' id='newPass' type='password'/>
          
              {isLoggedOut ? <HostYardListing setPage={setPage} setIsLoggedOut={setIsLoggedOut}/>: null}

              <MDBBtn className='w-100 mb-4' size='md'  color='warning' onClick = {()=> setIsLoggedIn(true)}
              //make function that if there are no yard it displays 'You have no yards yet' 
              >Create Account</MDBBtn>
        
             
              <div className="text-center">
             
              </div>
             
            </MDBCardBody>
          </MDBCard>
    </form>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default NewHost;