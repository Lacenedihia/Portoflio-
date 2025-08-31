import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/homescreen";
import { TranslationProvider } from "./translation.jsx";
function App() {
  return (
    <div className="App">
      <TranslationProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </TranslationProvider>
    </div >
  );
}

export default App;