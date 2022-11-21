import React from "react";
import { Container, Row, Col, button, Button } from "react-bootstrap";
import "./Log.css";
import axios from "axios";

function Log(props) {
  async function handleDelete(e) {
    e.preventDefault();
    console.log(props.dive._id);
    const dive_id = props.dive._id;
    console.log("clicked deleted");

    try {
      await axios
        .delete("/dive/" + dive_id)
        .then(console.log("cliked delete dive"));
      window.location.href = "http://localhost:3000/history";
    } catch (error) {
      console.log(error);
    }
  }

  // async function handleGetLogs(e) {
  //   e.preventDefault();
  //   try {
  //     const result = await axios
  //       .get("/dive")
  //       .then(console.log("created new dive"));
  //     console.log(result.data);
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <Container className="card1">
      <Row>
        <Col>
          <h1 className="location">Location : {props.dive.location}</h1>
        </Col>
        <Col>
          <h2 className="date">Date : {props.dive.date}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="temperature label">
            Temperature: {props.dive.temperature}
          </div>
        </Col>
        <Col>
          <div className="water label ">
            Water Type : {props.dive.waterType}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="start label">Start : {props.dive.gasStart} </div>
        </Col>
        <Col>
          <div className="end label">End : {props.dive.gasEnd}</div>
        </Col>
      </Row>

      <Col>
        <div className="time label">Time : {props.dive.diveTime}</div>
        <div className="weight label">
          Dive length : {props.dive.diveLength}
        </div>
      </Col>
      <div className="max_deep label">Max deep : {props.dive.maxDepth}</div>

      <Button>Edit</Button>

      <form action="/dive/" method="post" onSubmit={handleDelete}>
        <input type="hidden" name="diveId" value="dive.id"></input>
        <Button className="btn btn-danger" type="submit">
          Delete
        </Button>
      </form>
    </Container>
  );
}

export default Log;
