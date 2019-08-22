import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Reviews from "./views/reviews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Reviews />
    </div>
  );
}

export default App;
