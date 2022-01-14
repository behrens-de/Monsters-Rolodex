import React from "react";
import "./card.style.css";
export const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set1&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <h3>{monster.company.name}</h3>
    </div>
  );
};
