import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => {
  const { monsters } = props;

  const allCards = (
    <div className="card-list">
      {monsters.map((monster) => {
        // Jedes Element brauch einen Uniq Key damit react sich auf dieses eine Element beim rerendern beziehen kann
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );

  const noCards = <div className="no-cards"> Keine Monster gefunden</div>;

  return monsters.length > 0 ? allCards : noCards;
};
