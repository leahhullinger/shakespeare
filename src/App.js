import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div style={{ position: "relative", top: 300 }}>
        <Reviews />
      </div>
    </div>
  );
}

export default App;
