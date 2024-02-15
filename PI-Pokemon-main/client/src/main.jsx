import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRoter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRoter>
      <App />
    </BrowserRoter>
  </Provider>
);
