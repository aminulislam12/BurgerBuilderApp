import React from "react";

const Summary = (props) => {
  const Ingredient = props.inGredient.map((item) => {
    return (
      <li key={item.type}>
        <span>{item.type}</span>:{item.amount}
      </li>
    );
  });
  return (
    <div>
      <ul>{Ingredient}</ul>
    </div>
  );
};

export default Summary;
