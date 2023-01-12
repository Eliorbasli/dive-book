import React, { useEffect, useState } from "react";
import "./Logbook.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";

// const initialState = {
//   date: "",
//   time: "",
//   location: "",
//   diveLength: "",
//   waterTemperature: "",
//   maxDeep: "",
//   gasStart: "",
//   gasEnd: "",
//   typeWater: "",
// };

function Logbook() {
  const { id } = useParams();

  //////////////////////////////////

  const [Log, setLog] = useState([]);

  const getLog = async () => {
    try {
      const res = await axios.get("/dive/" + id);
      // console.log(res.data);
      setLog(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLog();
  }, []);

  // const options = {
  //   // weekday: "long",
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // };
  // var date1 = new Date(Log.date);
  // var date2 = new Date("11-4-2022");
  // console.log(date1);
  // const date3 = date2.toLocaleDateString("en-us", options);
  // console.log(date3);
  // console.log(typeof date2);
  // console.log("---->", Log.diveTime);

  const [date, setDate] = useState(Log.date || "");
  const [time, setTime] = useState(Log.diveTime || "");
  const [location, setLocation] = useState(Log.location || "");
  const [diveLength, setDiveLengeth] = useState(Log.diveLength || "");
  const [waterTemperature, setwaterTemperature] = useState(
    Log.waterTemperature || ""
  );
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
      //create a new log
      if (!id) {
        console.log("1");
        await axios
          .post("/dive", newDive)
          .then(console.log("created new dive log"));
        console.log("2");
        window.location.href = "http://localhost:3000";
      }
      //update exsit log
      else {
        await axios.put("/dive/" + id, newDive).then(console.log("update log"));
        window.location.href = "http://localhost:3000";
      }
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
                defaultValue={Log.date || ""}
                // value={Log.date || ""}

                onChange={(e) => setDate(e.target.value)}
                // onChange={handleInputChange}
              />
              <label>Time</label>
              <input
                required
                type="time"
                defaultValue={Log.diveTime || ""}
                placeholder="Enter time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <label>Location</label>
              <input
                required
                type="text"
                // value={Log.location || ""}
                defaultValue={Log.location}
                placeholder="Enter location"
                onChange={(e) => setLocation(e.target.value)}
              />

              <label>Dive length</label>
              <input
                required
                type="text"
                // value={Log.diveLength || ""}
                defaultValue={Log.diveLength || ""}
                placeholder="Enter dive length"
                onChange={(e) => setDiveLengeth(e.target.value)}
              />

              <label>Water temperature</label>
              <input
                required
                type="text"
                // value={Log.waterTemperature || ""}
                defaultValue={Log.temperature || ""}
                placeholder="Enter water temperature"
                onChange={(e) => setwaterTemperature(e.target.value)}
              />

              <label>Max deep</label>
              <input
                required
                type="text"
                defaultValue={Log.maxDepth || ""}
                placeholder="Enter max deep"
                onChange={(e) => setMaxDeep(e.target.value)}
              />

              <label>Initial amount of gas</label>
              <input
                required
                type="text"
                defaultValue={Log.gasStart || ""}
                placeholder="Enter amount of gas"
                onChange={(e) => setgasStart(e.target.value)}
              />

              <label>Amount of gas at the end</label>
              <input
                required
                type="text"
                defaultValue={Log.gasEnd || ""}
                placeholder="Enter amount of gas"
                onChange={(e) => setGasEnd(e.target.value)}
              />

              <label>Water type</label>
              <select
                name="waterType"
                defaultValue={Log.typeWater || ""}
                onChange={(e) => setTypeWater(e.target.value)}
              >
                <option value="fresh">Fresh</option>
                <option value="salt">Salt</option>
                <option value="tide">Tide</option>
                <option value="current">Current</option>
              </select>

              {/* <button className="submitBtn">Submit &rarr;</button> */}
              <input
                className="submitBtn"
                type="submit"
                value={id ? "Update" : "Submit"}
              ></input>
            </form>
          </div>
        </Col>
        <Col md={5} className="logbook__bg"></Col>
      </Row>
    </Container>
  );
}

export default Logbook;
