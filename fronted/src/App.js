import * as React from "react";
// import { Map, Marker } from "react-map-gl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Logbook from "./pages/Logbook";
import History from "./pages/History";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = localStorage.getItem("authenticated");
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* if user is false show login and signup */}
          {user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="/logbook" element={<Logbook />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
      {/* <Map
        initialViewState={{
          longitude: 34.0818,
          latitude: 30.8117,
          zoom: 7,
        }}
        style={{ width: 700, height: 550 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          latitude={34.0818}
          longitude={30.8117}
          offsetLeft={-10}
          offsetTop={-20}
        ></Marker>
      </Map> */}
    </div>
  );
}

export default App;
