import react from 'react';
import Form from 'react-bootstrap/Form';

function Role() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Role</option>
      <option value="1">Teacher</option>
      <option value="2">Student</option>
    </Form.Select>
  );
}

export default Role;