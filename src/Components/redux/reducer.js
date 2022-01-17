import * as ActionType from "../redux/ActionType";

const INITIAL_PRICE = {
  Salad: 20,
  Cheese: 40,
  Meat: 20,
};

const INITIAL_STATE = {
  inGredient: [
    { type: "Salad", amount: 0 },
    { type: "Cheese", amount: 0 },
    { type: "Meat", amount: 0 },
  ],
  orders: [],
  orderLoading: true,
  orderError: false,
  totalPrice: 80,
  purchesable: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const Ingredient = [...state.inGredient];
  switch (action.type) {
    case ActionType.ADD_INGREDIENT:
      for (let item of Ingredient) {
        if (item.type === action.payload) item.amount++;
      }
      return {
        ...state,
        inGredient: Ingredient,
        totalPrice: state.totalPrice + INITIAL_PRICE[action.payload],
      };
    case ActionType.REMOVE_INGREDIENT:
      for (let item of Ingredient) {
        if (item.type === action.payload) {
          if (item.amount <= 0) return state;
          item.amount--;
        }
      }
      return {
        ...state,
        inGredient: Ingredient,
        totalPrice: state.totalPrice - INITIAL_PRICE[action.payload],
      };
    case ActionType.UPDATE_PURCHESABLE:
      const sum = state.inGredient.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);
      return {
        ...state,
        purchesable: sum > 0,
      };
    case ActionType.RESET_INGREDIENT:
      return {
        ...state,
        inGredient: [
          { type: "Salad", amount: 0 },
          { type: "Cheese", amount: 0 },
          { type: "Meat", amount: 0 },
        ],
        totalPrice: 80,
        purchesable: false,
      };
    case ActionType.LOAD_ORDER:
      let order = [];
      for (let key in action.payload) {
        order.push({
          ...action.payload[key],
          id: key,
        });
      }
      return {
        ...state,
        orders: order,
        orderLoading: false,
      };
    case ActionType.ORDERLOAD_FAILED:
      return {
        ...state,
        orderError: true,
        orderLoading: false,
      };
    default:
      return state;
  }
};
