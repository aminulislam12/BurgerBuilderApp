import axios from "axios";
import * as ActionType from "./ActionType";
const baseURL =
  "https://burgerbuilder-ef233-default-rtdb.firebaseio.com/order.json";
export const addIngradient = (ingtype) => {
  return {
    type: ActionType.ADD_INGREDIENT,
    payload: ingtype,
  };
};

export const removeIngredient = (ingtype) => {
  return {
    type: ActionType.REMOVE_INGREDIENT,
    payload: ingtype,
  };
};

export const updatePurchesable = () => {
  return {
    type: ActionType.UPDATE_PURCHESABLE,
  };
};

export const resetIngredient = () => {
  return {
    type: ActionType.RESET_INGREDIENT,
  };
};

export const loadOrder = (order) => {
  return {
    type: ActionType.LOAD_ORDER,
    payload: order,
  };
};

export const faildLoad = () => {
  return {
    type: ActionType.ORDERLOAD_FAILED,
  };
};

export const featchOrder = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((response) => dispatch(loadOrder(response.data)))
    .catch((error) => {
      dispatch(faildLoad());
    });
};
