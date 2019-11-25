import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Helpers
import { getRandomShape } from "../Shape/core/helpers";

// Core
import { QUOTE_CYCLER__HIDE_TIME, QUOTE_CYCLER__INTERVAL } from "./core/constants";

// Components
import Quote from "../Quote";
import Fireworks from "../Fireworks";

function QuoteCycler({ quotes }) {
  const [index, setIndex] = useState(0);
  const [show, setVisibility] = useState(true);
  const [shape, setShape] = useState(getRandomShape());

  // Cyclying through quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility(false);
      setTimeout(() => {
        setIndex(i => i + 1);
        setVisibility(true);
        setShape(getRandomShape());
      }, QUOTE_CYCLER__HIDE_TIME);
    }, QUOTE_CYCLER__INTERVAL);
    return () => clearInterval(interval);
  });

  return (
    <div className="c-quote-cycler">
      <Quote
        show={show}
        text={quotes[index % quotes.length].text}
        author={quotes[index % quotes.length].author}
        primaryColor="rgb(64, 126, 218)"
      />
      <Fireworks show={show} shape={shape} />
      <Fireworks show={show} shape={shape} top right />
    </div>
  );
}

QuoteCycler.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default QuoteCycler;
