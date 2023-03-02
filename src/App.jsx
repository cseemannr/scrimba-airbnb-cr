import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Photogrid from "./components/Photogrid";
import data from "./data";

export default function App() {
  const dataCards = data.map((item) => {
    return (
      <Card
        id={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Photogrid />
      <section className="cards-list container">{dataCards}</section>
    </div>
  );
}
