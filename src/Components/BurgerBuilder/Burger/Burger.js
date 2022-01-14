import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import "./Burger.css";

const Burger = (props) => {
  let inGredientArry = props.inGredient
    .map((item) => {
      let amountArry = [...Array(item.amount).keys()];
      return amountArry.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arry, element) => {
      return arry.concat(element);
    }, []);
  if (inGredientArry.length === 0) {
    inGredientArry = (
      <p className="text-center fw-bold">Please Add Ingredient</p>
    );
  }
  return (
    <div className="burger">
      <Ingredient type="breadTop" />
      {inGredientArry}
      <Ingredient type="breadBottom" />
    </div>
  );
};

export default Burger;
