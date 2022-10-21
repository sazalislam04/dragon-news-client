import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);

  const photoURLRef = useRef(user?.photoURL);

  const hanldeSubmit = (e) => {
    e.preventDefault();

    console.log(name, photoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form onSubmit={hanldeSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          readOnly
          defaultValue={user?.email}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          type="text"
          defaultValue={name}
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoUrl</Form.Label>
        <Form.Control
          ref={photoURLRef}
          onChange={handleNameChange}
          type="text"
          defaultValue={user?.photoURL}
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
