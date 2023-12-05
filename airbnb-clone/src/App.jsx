import React from "react"
import logo from "./assets/airbnb-logo.png"
import banner from "./assets/photo-grid.png"
import './App.css'

import Nav from "./components/Nav"
import Experiences from "./components/Experiences"


function App() {
  return (
    <>
      <Nav logo={logo}/>
      <Experiences banner={banner} />
    </>
  )
}

export default App
