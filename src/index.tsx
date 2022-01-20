import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";

ReactDOM.render(
  <>
    <ToastContainer draggable={false} autoClose={3000} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
