import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div style={{ position: "relative", top: 150 }}>
        <Reviews />
      </div>
    </div>
  );
}

export default App;
