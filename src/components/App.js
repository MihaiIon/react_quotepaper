import React from "react";

// Components
import Quote from "./Quote";
// import Routes from "../../routes";

function App() {
  return (
    <div className="c-app">
      <Quote show text="This is my quote" author="Mihai Ionescu" primaryColor="red" />
    </div>
  );
}

export default App;
