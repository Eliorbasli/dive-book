import React, { useState } from "react";
import "./Logbook.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Logbook() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [diveLength, setDiveLengeth] = useState("");
  const [waterTemperature, setwaterTemperature] = useState("");
  const [maxDeep, setMaxDeep] = useState("");
  const [gasStart, setgasStart] = useState("");
  const [gasEnd, setGasEnd] = useState("");
  const [typeWater, setTypeWater] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newDive = {
      username: localStorage.username,
      location: location,
      diveLength: diveLength,
      date: date,
      temperature: waterTemperature,
      gasStart: gasStart,
      gasEnd: gasEnd,
      diveTime: time,
      maxDepth: maxDeep,
      typeWater: typeWater,
    };
    try {
      await axios.post("/dive", newDive).then(console.log("created new dive"));
      window.location.href = "http://localhost:3000";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Row>
        <Col md={7}>
          <div className="data hidden">
            <div className="header2__title">
              <h1 className="title">
                Log
                <span className="highlight">&nbsp;your&nbsp;</span>
                <br />
                <span className="highlight">&nbsp;dives&nbsp;</span> now!
              </h1>
            </div>
            <h2 className="data__header">
              Welcome back, We hope you enjoyed your dive!
              <br />
              <span className="highlight">Tell us more details: </span>
            </h2>
            <form className="data__form" onSubmit={handleSubmit}>
              <label>Date</label>
              <input
                required
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Time</label>
              <input
                required
                type="time"
                placeholder="Enter time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <label>Location</label>
              <input
                required
                type="text"
                placeholder="Enter location"
                onChange={(e) => setLocation(e.target.value)}
              />

              <label>Dive length</label>
              <input
                required
                type="text"
                placeholder="Enter dive length"
                onChange={(e) => setDiveLengeth(e.target.value)}
              />

              <label>Water temperature</label>
              <input
                required
                type="text"
                placeholder="Enter water temperature"
                onChange={(e) => setwaterTemperature(e.target.value)}
              />

              <label>Max deep</label>
              <input
                required
                type="text"
                placeholder="Enter max deep"
                onChange={(e) => setMaxDeep(e.target.value)}
              />

              <label>Initial amount of gas</label>
              <input
                required
                type="text"
                placeholder="Enter amount of gas"
                onChange={(e) => setgasStart(e.target.value)}
              />

              <label>Amount of gas at the end</label>
              <input
                required
                type="text"
                placeholder="Enter amount of gas"
                onChange={(e) => setGasEnd(e.target.value)}
              />

              <label>Water type</label>
              <select
                name="waterType"
                onChange={(e) => setTypeWater(e.target.value)}
              >
                <option value="fresh">Fresh</option>
                <option value="salt">Salt</option>
                <option value="tide">Tide</option>
                <option value="current">Current</option>
              </select>

              <button class="submitBtn">Submit &rarr;</button>
            </form>
          </div>
        </Col>
        <Col md={5} className="logbook__bg"></Col>
      </Row>
    </Container>
  );
}

export default Logbook;
