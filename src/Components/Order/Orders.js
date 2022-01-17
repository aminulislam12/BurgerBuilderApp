import React, { Component } from "react";
import { connect } from "react-redux";
import { featchOrder } from "../redux/actionCreators";
import SingleOrder from "./SingleOrder/SingleOrder";
import Loader from "../Spiner/Loader";
import { UncontrolledAlert } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    featchOrder: () => dispatch(featchOrder()),
  };
};
class Orders extends Component {
  componentDidMount() {
    this.props.featchOrder();
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    let orders = null;
    if (this.props.orderError) {
      orders = (
        <UncontrolledAlert color="info">
          Sorry SomeThing Want To Wrong!
        </UncontrolledAlert>
      );
    } else {
      if (this.props.orders.length === 0) {
        orders = (
          <UncontrolledAlert color="danger">
            Sorry You Have No order!
          </UncontrolledAlert>
        );
      } else {
        orders = this.props.orders.map((order) => {
          return <SingleOrder order={order} key={order.id} />;
        });
      }
    }

    return (
      <>
        <div className="container">
          <div className="row my-2">
            {this.props.orderLoading ? <Loader /> : orders}
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Orders);
