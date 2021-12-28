import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import MovieForm from "./components/MovieForm";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/movieform" component={MovieForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
