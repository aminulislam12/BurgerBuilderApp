import React from "react";
import { Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header.js/Header";
import Order from "./Order/Order";
import Checkout from "./Order/Checkout/Checkout";

const Main = (props) => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/checkout" component={Checkout} />
    </div>
  );
};

export default Main;
