import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/hompage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
