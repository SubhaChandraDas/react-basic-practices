import React from "react";
import HOCCount from "./withCount";

function BlueCounter({ count, incrementCount }) {
  return (
    <button className="blue" onClick={incrementCount}>
      click to count {count}
    </button>
  );
}
export default HOCCount(BlueCounter);
