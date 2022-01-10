import React, { Component } from "react";
import Burger from "./Burger/Burger";
import * as IngredientType from "./Ingredient/IngredientType";

export default class BurgerBuilder extends Component {
  state = {
    inGredient: [
      { type: IngredientType.Salad, amount: 1 },
      { type: IngredientType.Cheese, amount: 1 },
      { type: IngredientType.Meat, amount: 1 },
    ],
  };
  render() {
    return (
      <div className="container">
        <Burger inGredient={this.state.inGredient} />
      </div>
    );
  }
}
