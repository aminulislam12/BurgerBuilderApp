import React from "react";
import { Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header.js/Header";
import Checkout from "./Order/Checkout/Checkout";
import Orders from "./Order/Orders";

const Main = (props) => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/order" component={Orders} />
      <Route exact path="/checkout" component={Checkout} />
    </div>
  );
};

export default Main;
