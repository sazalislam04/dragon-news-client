import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const Register = () => {
  const { createUser, userUpdateProfile, verifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/login");
        handleUpdateProfile(name, photoUrl);
        handleVerifyEmail();
        toast.success(
          "Verification email send. Please check your email address"
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });

    console.log(name, email, password, photoUrl);
  };

  const handleAccepted = (event) => {
    setAccept(event.target.checked);
  };

  const handleUpdateProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };

    userUpdateProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch(() => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>PhotoUrl</Form.Label>
        <Form.Control type="text" name="photoUrl" placeholder="PhotoUrl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms">Terms & Conditions</Link>{" "}
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
