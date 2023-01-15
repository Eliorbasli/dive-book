import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  //login function
  async function handleLogin(e) {
    e.preventDefault();
    const loginUser = {
      name: name,
      password: password,
    };
    try {
      const res = await axios
        .post("https://dive-logbook-api.onrender.com/api/user/login", loginUser)
        .then(console.log("login worked"));
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("authenticated", true);
        localStorage.setItem("username", loginUser.name);
        //localStorage.image("userImage", loginUser.userimage);
        //console.log(loginUser.userimage);
        navigate("/logbook");
      }
    } catch (error) {
      localStorage.setItem("authenticated", false);
      setError(true);
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
            {error && (
              <>
                <Form.Text className="text-muted error1">
                  Wrong user or password
                </Form.Text>
                <br />
              </>
            )}
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
