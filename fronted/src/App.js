import * as React from "react";
import { Map, Marker } from "react-map-gl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

<link
  href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
  rel="stylesheet"
/>;

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZWxpb3JiYXNsaSIsImEiOiJjbDhyZmF4ZWszM2gxM3dvNXhwMHBkb3I5In0.DYkNUjB26u1E1iFZ15DdQg"; // Set your mapbox token here

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
