import React from "react";
import "./Single.css";

const SingleOrder = (props) => {
  console.log(props);
  const ingredient = props.order.ingredient.map((item) => {
    return (
      <span key={Math.random()} className="items">
        {item.amount} x {item.type}
      </span>
    );
  });
  return (
    <div className="col-md-4">
      <div className="showOrder">
        <div>
          <strong>Order Id: {props.order.id} </strong>
        </div>
        <div>Delivery Address: {props.order.customerinfo.deliveryaddress} </div>
        <div className="my-2"> {ingredient} </div>
        <h5>Total: {props.order.price} BDT</h5>
      </div>
    </div>
  );
};

export default SingleOrder;
