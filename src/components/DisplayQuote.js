import axios from "axios";
import React, { useState, useEffect, memo } from "react";

const DisplayQuote = memo(({ show, quoteId }) => {
  let [quote, setQuote] = useState({});

  useEffect(() => {
    if (show) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${quoteId}`)
        .then((response) => {
          console.log(response);
          setQuote(response.data);
        });
    }
  }, [quoteId]);

  if (!show) {
    return null;
  }
  return (
    <div>
      <p>{quote.title}</p>
    </div>
  );
});

export default DisplayQuote;
