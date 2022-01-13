import react from "react";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        // Jedes Element brauch einen Uniq Key damit react sich auf dieses eine Element beim rerendern beziehen kann
        return <h2 key={monster.id}>{monster.name}</h2>;
      })}
    </div>
  );
};
