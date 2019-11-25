import React from "react";

// Helpers
import { getRandomColor } from "./core/helpers";

// Components
import QuoteCycler from "../QuoteCycler";

const dummyQuotes = [
  {
    text: "Time you enjoy wasting, was not wasted",
    author: "John Lennon"
  },
  {
    text: "Action is the foundational key to success",
    author: "Pablo Picasso"
  },
  {
    text: "The best way to destroy an enemy is to make him a friend",
    author: "Abraham Lincoln"
  }
];

function App() {
  return (
    <div className="c-app">
      <div className="c-app_content">
        <QuoteCycler quotes={dummyQuotes} />
      </div>
    </div>
  );
}

export default App;
