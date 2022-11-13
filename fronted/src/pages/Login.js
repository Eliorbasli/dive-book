import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  // const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    //login
    console.log("login function");
    const loginUser = {
      name: name,
      password: password,
    };
    console.log(loginUser);
    try {
      const res = await axios
        .post("/user/login", loginUser)
        .then(console.log("login worked"));
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("authenticated", true);
        localStorage.setItem("username", loginUser.name);
        window.location.href = "/logbook";
      }
      //setSuccess(true);
    } catch (error) {
      localStorage.setItem("authenticated", false);
      //setError(true);
    }
  }

  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            {/* d-flex align-items-center justify-content-center flex-direction-column */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
