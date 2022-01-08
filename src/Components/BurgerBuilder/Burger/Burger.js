import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import * as IngredientType from "../Ingredient/IngredientType";

const Burger = (props) => {
  return (
    <div>
      <Ingredient type={IngredientType.breadTop} />
      <Ingredient type={IngredientType.Cheese} />
      <Ingredient type={IngredientType.Salad} />
      <Ingredient type={IngredientType.Meat} />
      <Ingredient type={IngredientType.breadBottom} />
    </div>
  );
};

export default Burger;
