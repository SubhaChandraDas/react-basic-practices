import React, { useReducer } from "react";

const initialState = {
  count: 0
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  const [countState, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      <p>{countState.count}</p>
      <button className="blue" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="red" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button className="green" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ReducerCounter;
