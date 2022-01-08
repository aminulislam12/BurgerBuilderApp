import React from "react";
import "./intredient.css";
import * as IngredientType from "./IngredientType";
import breadTop from "../../assets/images/top.png";
import breadBottom from "../../assets/images/bottom.png";
import Meat from "../../assets/images/meat.png";
import Salad from "../../assets/images/salad.png";
import cheese from "../../assets/images/cheese.png";

const Ingredient = (props) => {
  let Ingredient = null;
  switch (props.type) {
    case IngredientType.breadTop:
      Ingredient = (
        <div>
          <img src={breadTop} alt="breadTop" />
        </div>
      );
      break;
    case IngredientType.breadBottom:
      Ingredient = (
        <div>
          <img src={breadBottom} alt="breadBottom" />
        </div>
      );
      break;
    case IngredientType.Meat:
      Ingredient = (
        <div>
          <img src={Meat} alt="Meat" />
        </div>
      );
      break;
    case IngredientType.Salad:
      Ingredient = (
        <div>
          <img src={Salad} alt="Salad" />
        </div>
      );
      break;
    case IngredientType.Cheese:
      Ingredient = (
        <div>
          <img src={cheese} alt="cheese" />
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <div className="intredient">{Ingredient}</div>
    </>
  );
};

export default Ingredient;
