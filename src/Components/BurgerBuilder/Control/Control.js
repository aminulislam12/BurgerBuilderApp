import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const control = [
  { lable: "Salad", type: "Salad" },
  { lable: "Cheese", type: "Cheese" },
  { lable: "Meat", type: "Meat" },
];
const BuildControl = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="mr-auto ml-5 fw-bold">{props.lable}</div>
      <div>
        <button className="btn btn-danger btn-sm m-1" onClick={props.remove}>
          Less
        </button>
        <button className="btn btn-success btn-sm m-1" onClick={props.added}>
          Add
        </button>
      </div>
    </div>
  );
};

const Control = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h5 className="text-center text-danger fw-bold">Add Ingredients</h5>
        </CardHeader>
        <CardBody>
          {control.map((item) => {
            return (
              <BuildControl
                lable={item.lable}
                type={item.type}
                key={Math.random()}
                added={() => props.inGredientAdded(item.type)}
                remove={() => props.inGredientRemove(item.type)}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5 className="text-center fw-bold">Price: {props.price} BDT</h5>
        </CardFooter>
        <Button onClick={props.toggleModal} disabled={!props.purchesable}>
          Order Now
        </Button>
      </Card>
    </div>
  );
};

export default Control;
