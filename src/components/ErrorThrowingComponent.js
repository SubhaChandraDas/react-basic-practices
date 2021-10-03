import React from "react";

function ErrorThrowingComponent({ animeName }) {
  if (["SuperMan", "Batman", "Avengers"].includes(animeName)) {
    throw new Error("It's from comic not from Manga!");
  }
  return <div>{animeName}</div>;
}

export default ErrorThrowingComponent;
