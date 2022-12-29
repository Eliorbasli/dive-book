import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./Settings.css";
function Settings() {
  const [username, setUserName] = useState(localStorage.username);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleChangePassword(e) {
    e.preventDefault();
    const userNewPassword = {
      username: username,
      password: password,
      newPassword: newPassword,
    };
    try {
      const res = await axios
        .post("user/updatePassword", userNewPassword)
        .then(console.log("updatedPassword"));
      console.log(res);
      if (res.status === 200) {
        console.log("password changed succesful");
        // localStorage.setItem("authenticated", true);
        // localStorage.setItem("username", loginUser.name);
        // navigate("/logbook");
      } else {
        console.log("password changed failed");
      }
    } catch (error) {
      console.log("password changed failed");
      //   localStorage.setItem("authenticated", false);
      //   setError(true);
    }
  }
  return (
    <Container>
      <Row>
        <Col md={5} className="settings__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form
            style={{ width: "80%", maxWidth: 500 }}
            onSubmit={handleChangePassword}
          >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={localStorage.username}
                placeholder="Enter Your User Name"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>

            {/* d-flex align-items-center justify-content-center flex-direction-column */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
