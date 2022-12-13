import "./style.css";
import ReactDOM from "react-dom";
import React from "react";
import Header from "./Header";
import MainBody from "./MainBody";

export const App = () => {
  return (
    <>
      <Header />
      <MainBody />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
