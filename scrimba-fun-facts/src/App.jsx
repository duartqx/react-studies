import React from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="f-inter">
      <Header logo={reactLogo} />
      <MainContent />
    </div>
  );
}

export default App;
