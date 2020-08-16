import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Footer from "../../components/Footer";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
      <Switch >
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
      <Footer className="foot"></Footer>
      </div>
    </div>
  );
}

export default App;
