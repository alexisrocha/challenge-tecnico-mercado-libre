import React from "react";
import { Route, Switch } from "react-router";
import HomeContainer from "./home/HomeContainer";
import agregarContainer from "./agregar/agregarContainer";

export default function Main() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/agregar" component={agregarContainer} />
      </Switch>
    </>
  );
}
