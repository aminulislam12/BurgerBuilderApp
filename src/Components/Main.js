import React from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header.js/Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      <BurgerBuilder />
    </div>
  );
};

export default Main;
