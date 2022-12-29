import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Logbook from "./pages/Logbook";
import History from "./pages/History";
import Rdp from "./pages/Rdp";
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
          <Route path="/update/:id" element={<Logbook />} />

          <Route path="/history" element={<History />} />
          <Route path="/rdp" element={<Rdp />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
