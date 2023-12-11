import React from "react";
import "../home.css";
import { Button } from "@mui/joy";

function CarItem({ car }) {
  return (
    <div key={car.id} className="item">
      <div className="image" style={{ backgroundImage: `url(${car.image})` }} />
      <div className="info">
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(car.price)}
        </p>
        <Button variant="plain">Read more</Button>
      </div>
    </div>
  );
}

export default CarItem;
