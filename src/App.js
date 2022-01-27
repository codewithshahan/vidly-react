import React, { useEffect, useState } from "react";
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
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import LogOut from "./components/LogOut";
import { getCurrentUser } from "./services/authService";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/logout" component={LogOut}></Route>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
