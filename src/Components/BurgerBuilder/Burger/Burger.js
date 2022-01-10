import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import * as IngredientType from "../Ingredient/IngredientType";
import "./Burger.css";

const Burger = (props) => {
  let inGredientArry = props.inGredient.map((item) => {
    let amountArry = [...Array(item.amount).keys()];
    return amountArry.map((_) => {
      return <Ingredient type={item.type} key={Math.random()} />;
    });
  });
  return (
    <div className="burger">
      <Ingredient type={IngredientType.breadTop} />
      {inGredientArry}
      <Ingredient type={IngredientType.breadBottom} />
    </div>
  );
};

export default Burger;
