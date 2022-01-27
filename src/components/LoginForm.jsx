import React from "react";
import Joi from "joi-browser";
import form from "./common/form";
import { getWithJwt, login } from "../services/authService";
import { toast } from "react-toastify";

export default class LoginForm extends form {
  state = {
    data: { username: "", password: "" },
    errorMessage: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  async doSubmit() {
    try {
      const { data } = this.state;
      login(data.username, data.password);
      toast.success("Successfully logged in");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errorMessage };
        errors.username = ex.response.data;
        this.setState({ errorMessage: errors });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2>Login</h2>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
        </div>

        {this.renderButton("Login")}
      </form>
    );
  }
}
