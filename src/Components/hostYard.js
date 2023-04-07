import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingSelectExample() {
  return (

    
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
  );
}

export default FormFloatingSelectExample;
