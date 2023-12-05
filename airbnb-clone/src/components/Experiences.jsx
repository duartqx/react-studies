import React from "react";

export default function Experiences({ banner }) {
  return (
    <section className="banner--section">
      <section className="banner--image--section">
        <img src={banner} alt="Experiences-banner" className="banner--image" />
      </section>
      <section className="section--cta">
        <h1 className="cta--title">Online Experiences</h1>
        <p className="cta--text">Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.</p>
      </section>
    </section>
  )

}
