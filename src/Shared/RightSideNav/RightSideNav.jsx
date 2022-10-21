import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import Carosule from "./Carosule";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const handleLogin = () => {
    const googleProvider = new GoogleAuthProvider();

    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <Button onClick={handleLogin} variant="outline-primary mb-3">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> Linkdine
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Carosule />
    </div>
  );
};

export default RightSideNav;
