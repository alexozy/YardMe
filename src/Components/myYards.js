import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


// the listings will display here!
// this is a 3 equal section grid; the yard cards will stack equally across.
function myYards() {
  return (
    <div> 
    <MDBRow>
      <MDBCol md='4'>
        Box 1
      </MDBCol>
      <MDBCol md='4'>
        Box middle
      </MDBCol>
      <MDBCol md='4'>
        Box 3
      </MDBCol>
    </MDBRow>

{/* second row */}

    <MDBRow>
      <MDBCol md='4'>
        Box 1
      </MDBCol>
      <MDBCol md='4'>
        Box middle
      </MDBCol>
      <MDBCol md='4'>
        Box 3
      </MDBCol>
    </MDBRow>


    </div>

    
    
  );
}

export default myYards;

