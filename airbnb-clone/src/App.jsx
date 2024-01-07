import React from "react"
import logo from "./assets/airbnb-logo.png"
import banner from "./assets/photo-grid.png"
import cards from "./data/cards.json"
import './App.css'

import Nav from "./components/Nav"
import Experiences from "./components/Experiences"
import Cards from "./components/Cards"


function App() {
  return (
    <>
      <Nav logo={logo}/>
      <Experiences banner={banner} />
      <Cards cards={cards} />
    </>
  )
}

export default App
