import React from "react";
import photogrid from "../images/photo-grid.png";

export default function Photogrid() {
  return (
    <section className="photogrid container">
      <img src={photogrid} alt="photogrid from people" />
      <div className="xp-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
