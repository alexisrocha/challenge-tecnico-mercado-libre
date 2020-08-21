import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./react/Main";
import Store from "./redux/store";

ReactDom.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Route to="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
