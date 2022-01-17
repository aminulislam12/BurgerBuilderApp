import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToprops = (state) => {
  return {
    inGredient: state.inGredient,
  };
};
class CountItems extends Component {
  render() {
    console.log(this.props.inGredient);
    const ingCount = this.props.inGredient.map((item) => {
      return (
        <span key={item.type}>
          {item.type} {item.amount}
        </span>
      );
    });
    return (
      <>
        <span>{ingCount}</span>
      </>
    );
  }
}

export default connect(mapStateToprops)(CountItems);
