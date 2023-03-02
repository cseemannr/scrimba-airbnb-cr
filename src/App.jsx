import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Photogrid from "./components/Photogrid";
import data from "./data";

export default function App() {
  const dataCards = data.map((item) => {
    return <Card id={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Photogrid />
      <section className="cards-list container">{dataCards}</section>
    </div>
  );
}
