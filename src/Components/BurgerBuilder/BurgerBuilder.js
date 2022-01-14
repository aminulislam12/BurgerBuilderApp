import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";
import Summary from "./Summary/Summary";

const IngredientPrice = {
  Salad: 20,
  Cheese: 40,
  Meat: 20,
};
export default class BurgerBuilder extends Component {
  state = {
    inGredient: [
      { type: "Salad", amount: 0 },
      { type: "Cheese", amount: 0 },
      { type: "Meat", amount: 0 },
    ],
    totalPrice: 80,
    modalOpen: false,
    purchesable: false,
  };
  updatePurchesable = (Ingredient) => {
    const sum = Ingredient.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({
      purchesable: sum > 0,
    });
  };
  addIngredientHandle = (type) => {
    const Ingredient = [...this.state.inGredient];
    const newPrice = this.state.totalPrice + IngredientPrice[type];
    for (let item of Ingredient) {
      if (item.type === type) item.amount++;
    }
    this.setState({ inGredient: Ingredient, totalPrice: newPrice });
    this.updatePurchesable(Ingredient);
  };
  removeIngredientHandle = (type) => {
    const indgredient = [...this.state.inGredient];
    const newPrice = this.state.totalPrice - IngredientPrice[type];
    for (let item of indgredient) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ inGredient: indgredient, totalPrice: newPrice });
    this.updatePurchesable(indgredient);
  };
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  handleCheckout = () => {
    this.props.history.push("/checkout");
  };
  render() {
    return (
      <div>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Burger inGredient={this.state.inGredient} />
            </div>
            <div className="col-md-6 col-sm-12">
              <Control
                inGredientAdded={this.addIngredientHandle}
                inGredientRemove={this.removeIngredientHandle}
                price={this.state.totalPrice}
                toggleModal={this.toggleModal}
                purchesable={this.state.purchesable}
              />
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h6>Price:{this.state.totalPrice.toFixed(0)} BDT</h6>
            <Summary inGredient={this.state.inGredient} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              Continue To Checkout
            </Button>
            <Button color="danger" onClick={this.toggleModal}>
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
