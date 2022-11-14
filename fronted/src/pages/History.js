import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./history.css";
//import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// import { Link } from "react-router-dom";

function logbook() {
  async function handleGetLogs(e) {
    e.preventDefault();
    try {
      const result = await axios
        .get("/dive")
        .then(console.log("created new dive"));
      console.log(result.data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div on onClick={handleGetLogs}>
      hello world
    </div>
  );
}

export default logbook;
