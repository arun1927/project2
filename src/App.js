import React, { useState } from "react";
import "./App.css";

import Ticket from "./Ticket.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bottom from "./Bottom";
import Bill from "./Bill";

function App() {
  const [cart, setCart] = useState([]);
  const selectFuntion = (item) => {
    let find = cart.find((i) => {
      return i.id == item.id;
    });
    // condition to check repeated id
    if (find) {
      find.qty = find.qty + 1;
      let findIndex = cart.indexOf(find);
      let duplicate = [...cart];
      // duplicate id name if id == prvious id
      duplicate[findIndex] = find;
      return setCart([...duplicate]);
    }
    // passing props into cart bill.js
    setCart([...cart, item]);
  };
  return (
    <Router>
      <div className="app">
        <div className="app_right">
          <Switch>
            <Route path="/">
              <Home
                select={(item) => {
                  selectFuntion(item);
                }}
              />
              <Bottom />
            </Route>
          </Switch>
        </div>
        <div className="app_left">
          <Switch>
            <Route path="/">
              <Ticket />
              <Bill cart={cart} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
