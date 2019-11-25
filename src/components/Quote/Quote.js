import React from "react";
import { Spring } from "react-spring/renderprops";
import PropTypes from "prop-types";

function Quote({ show, text, author, primaryColor }) {
  return (
    <div className="c-quote">
      <Spring from={{ opacity: 0 }} to={{ opacity: show ? 1 : 0 }}>
        {props => (
          <div style={props} className="c-quote_content">
            <h1 className="c-quote_text">{text}</h1>
            <h2 className="c-quote_author">{author}</h2>
          </div>
        )}
      </Spring>
      <div className={`c-quote_overlay ${!show ? "-expand" : ""}`} style={{ backgroundColor: primaryColor }} />
    </div>
  );
}

Quote.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired
};

export default Quote;
