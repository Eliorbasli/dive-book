import { useEffect, useState } from "react";
import "./history.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Log from "./../components/Log";

function History() {
  const [Logs, setLogs] = useState([]);

  const username = localStorage.getItem("username");

  const getLogs = async () => {
    try {
      console.log(username);
      const res = await axios.post("/dive/getById", { username });

      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLogs();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>your dive</h1>
          {Logs.map((p) => (
            <Log dive={p} />
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default History;
