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
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function UserLogin({setIsLoggedIn, setAddHost}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password:pass})
    }).then(
      function(response) {
        return response.json()
      }
    ).then(
      function(data) {
        console.log(data);
    // redirect to main page
      }
    )
  }

  return (
    
           <div className="user-login">
    {/* changed class from user-header to User login */}
    <MDBContainer fluid className='p-4 user-header overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Easy cash is <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>only one yard away!</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Living just outside the city has its perks! You can rent out your acres to 
          city dwellers with pets who need a yard for their furr-babies to run and explore!
          
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>


          <form onSubmit={handleSubmit}>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  
                  <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' id='form1 email' type='email'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' value={pass} onChange={(e) => setPass(e.target.value)} label='Password' id='form3 password' type='password'/>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'  type='submit' color='warning'
               onClick = {()=> setIsLoggedIn(true)}>Login</MDBBtn>
             
              <div className="text-center">
              {/* <p>Need to make some extra cash this summer?</p> */}
              <button className='NHost' onClick = {()=> setAddHost(true)}>Not yet a host? Register here.</button>
              {/*  */}
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

export default UserLogin;







    
