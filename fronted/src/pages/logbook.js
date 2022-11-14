import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./logbook.css";
import { Container, Row, Col } from "react-bootstrap";

// import { Link } from "react-router-dom";

function logbook() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <div class="data hidden">
            <div class="header2__title">
              <h1 class="title">
                Log
                <span class="highlight">&nbsp;your&nbsp;</span>
                <br />
                <span class="highlight">&nbsp;dives&nbsp;</span> now!
              </h1>
            </div>
            <h2 class="data__header">
              Welcome back, We hope you enjoyed your dive!
              <br />
              <span class="highlight">Tell us more details: </span>
            </h2>
            <form class="data__form">
              <label>Date</label>
              <input type="text" placeholder="Enter date" />
              <label>Time</label>
              <input type="text" placeholder="Enter time" />
              <label>Location</label>
              <input type="text" placeholder="Enter location" />

              <label>Dive length</label>
              <input type="text" placeholder="Enter dive length" />

              <label>Water temperature</label>
              <input type="text" placeholder="Enter water temperature" />

              <label>Max deep</label>
              <input type="text" placeholder="Enter max deep" />

              <label>Initial amount of gas</label>
              <input type="text" placeholder="Enter amount of gas" />

              <label>Amount of gas at the end</label>
              <input type="text" placeholder="Enter amount of gas" />

              <button class="btn submit">Submit &rarr;</button>
            </form>
          </div>
        </Col>
        <Col md={5} className="logbook__bg"></Col>
      </Row>
    </Container>
  );
}

export default logbook;
