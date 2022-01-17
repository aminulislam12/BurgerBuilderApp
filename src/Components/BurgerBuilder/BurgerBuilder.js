import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";
import Summary from "./Summary/Summary";
import { connect } from "react-redux";
import {
  addIngradient,
  removeIngredient,
  updatePurchesable,
} from "../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    inGredient: state.inGredient,
    totalPrice: state.totalPrice,
    purchesable: state.purchesable,
  };
};
const mapdispatchToprops = (dispatch) => {
  return {
    addIngradient: (ingtype) => dispatch(addIngradient(ingtype)),
    removeIngredient: (ingtype) => dispatch(removeIngredient(ingtype)),
    updatePurchesable: () => dispatch(updatePurchesable()),
  };
};
class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  };

  addIngredientHandle = (type) => {
    this.props.addIngradient(type);
    this.props.updatePurchesable();
  };
  removeIngredientHandle = (type) => {
    this.props.removeIngredient(type);
    this.props.updatePurchesable();
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
    console.log(this.props);
    return (
      <div>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Burger inGredient={this.props.inGredient} />
            </div>
            <div className="col-md-6 col-sm-12">
              <Control
                inGredientAdded={this.addIngredientHandle}
                inGredientRemove={this.removeIngredientHandle}
                price={this.props.totalPrice}
                toggleModal={this.toggleModal}
                purchesable={this.props.purchesable}
              />
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h6>Price:{this.props.totalPrice.toFixed(0)} BDT</h6>
            <Summary inGredient={this.props.inGredient} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              <i className="fa fa-shopping-cart"></i> Continue To Checkout
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

export default connect(mapStateToProps, mapdispatchToprops)(BurgerBuilder);
