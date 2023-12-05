import React from "react";

export default function Nav({ logo }) {
  return (
    <nav>
      <img src={logo} alt="AirBnb Logo" className="nav--logo" />
    </nav>
  )

}

