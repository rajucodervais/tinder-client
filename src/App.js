import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import SwipButtons from "./components/SwipButtons/SwipButtons";
import TinderCard from "./components/TinderCard/TinderCards";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* tender card */}
      <TinderCard />

      {/* swipeButtons */}
      <SwipButtons />
    </div>
  );
}

export default App;
