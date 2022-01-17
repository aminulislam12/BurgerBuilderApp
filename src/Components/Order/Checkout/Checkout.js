import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import "./Checkout.css";
import { connect } from "react-redux";
import axios from "axios";
import Spiner from "../../Spiner/Spiner";
import { resetIngredient } from "../../redux/actionCreators";

const mapStatetoProps = (state) => {
  return {
    ingredient: state.inGredient,
    totalPrice: state.totalPrice,
    purchesable: state.purchesable,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    resetIngredient: () => dispatch(resetIngredient()),
  };
};
class Checkout extends Component {
  state = {
    value: {
      deliveryaddress: "",
      phone: "",
      paymentType: "Cash On Delivery",
    },
    isLoading: false,
    isModalOpen: false,
    modalMesg: "",
  };
  goBack = () => {
    this.props.history.goBack("/");
  };
  onChnageHandler = (event) => {
    this.setState({
      value: {
        ...this.state.value,
        [event.target.name]: event.target.value,
      },
    });
  };
  submitHandler = () => {
    this.setState({
      value: {
        deliveryaddress: "",
        phone: "",
        paymentType: "Cash On Delivery",
      },
      isLoading: true,
    });
    const baseURL =
      "https://burgerbuilder-ef233-default-rtdb.firebaseio.com/order.json";
    const order = {
      ingredient: this.props.ingredient,
      customerinfo: this.state.value,
      price: this.props.totalPrice,
      date: new Date().toLocaleString(),
    };
    axios
      .post(baseURL, order)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMesg: `Order Plasced Successfully !`,
          });
          this.props.resetIngredient();
        } else {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMesg: `Something Want to wrong ! Order Again!`,
          });
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMesg: `${error.message} Reconnecting to your Wi-Fi`,
        });
        console.log(error.message);
      });
  };
  render() {
    let form = (
      <div>
        <div className="d-flex justify-content-center my-2">
          <div className="payment shadow-sm">
            <h4 className="">Payment: {this.props.totalPrice}BDT</h4>
          </div>
        </div>
        <div className="checkoutform my-3">
          <div className="form shadow-sm">
            <h3 className="text-center fw-bold my-1 text-capitalize">
              Customer Information
            </h3>
            <form>
              <div className="my-2">
                <label className="fw-bold">Delivery Address</label>
                <textarea
                  className="form-control"
                  name="deliveryaddress"
                  placeholder="Type Your Delivery Address"
                  value={this.state.value.deliveryaddress}
                  onChange={(value) => this.onChnageHandler(value)}
                ></textarea>
              </div>
              <div className="my-2">
                <label className="fw-bold">Mobile Number</label>
                <input
                  type="number"
                  placeholder="+880"
                  className="form-control"
                  name="phone"
                  value={this.state.value.phone}
                  onChange={(value) => this.onChnageHandler(value)}
                />
              </div>
              <div className="my-2">
                <label className="fw-bold">Payment Type</label>
                <select
                  className="form-control"
                  name="paymentType"
                  value={this.state.value.paymentType}
                  onChange={(value) => this.onChnageHandler(value)}
                >
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  <option value="bank">Bank</option>
                  <option value="bkash">Bkash</option>
                </select>
              </div>
              <div className="d-grid d-md-flex gap-5 my-3 justify-content-center">
                <Button
                  color="success"
                  onClick={this.submitHandler}
                  className="success btn-c col-5"
                  disabled={!this.props.purchesable}
                >
                  Place Order
                </Button>
                <Button color="dark" onClick={this.goBack} className="col-5">
                  Cancle Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    return (
      <>
        <div>{this.state.isLoading ? <Spiner /> : form}</div>
        <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
          <ModalBody>
            <p className="text-success fw-bold my-2 icon">
              {this.state.modalMesg}
            </p>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToprops)(Checkout);
