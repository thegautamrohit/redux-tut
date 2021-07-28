import React from "react";
import { connect } from "react-redux";
import { buyDrink } from "../redux";

function DrinkContainer(props) {
  return (
    <div>
      <h2>No of Drinks - {props.numOfDrinks}</h2>
      <button onClick={() => props.buyDrink()}>Buy Drink</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfDrinks: state.drink.numOfDrinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyDrink: () => dispatch(buyDrink()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkContainer);
