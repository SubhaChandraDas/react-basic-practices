import React from "react";
import HOCCount from "./withCount";

function GreenCounter({ count, incrementCount }) {
  return (
    <button className="green" onClick={incrementCount}>
      click to count {count}
    </button>
  );
}
export default HOCCount(GreenCounter);
