// import "./App.css";
import { useState } from "react";
import React from "react";
import "./App.scss";

import { Switch, Route, Link, Redirect, useParams } from "react-router-dom";

import { Brands } from "./components/Brands";
import { Cart } from "./components/Cart";
import { CartItem } from "./components/CartItem";
import { Header } from "./components/Header";
import { PhoneDetails } from "./components/PhoneDetails";
import { Phones } from "./components/Phones";
import { PriceFilters } from "./components/PriceFilters";

function App() {
  const [priceFilterUsed, setPriceFilterUsed] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/" exact render={() => <Redirect to="/products" />} />

        <Route path="/products" exact>
          <div className="container">
            <Brands priceFilterUsed={priceFilterUsed} index={index} />
            <PriceFilters
              priceFilterUsed={priceFilterUsed}
              setPriceFilterUsed={setPriceFilterUsed}
              setIndex={setIndex}
            />
            <Phones />
          </div>
        </Route>

        <Route
          path="/products/:id"
          exact
          render={(props) => <PhoneDetails {...props} />}
        />

        <Route path="/cart" exact render={() => <Cart />} />
      </Switch>
    </div>
  );
}

export default App;
