import * as ActionType from "./ActionType";

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
