import { BUY_DRINK } from "./DrinkTypes";

const initialState = {
  numOfDrinks: 15,
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_DRINK:
      return {
        ...state,
        numOfDrinks: state.numOfDrinks - 1,
      };
    default:
      return state;
  }
};

export default drinkReducer;
