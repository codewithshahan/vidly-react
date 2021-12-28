import React from "react";
import Joi from "joi-browser";
import form from "./common/form";

export default class LoginForm extends form {
  state = {
    data: { username: "", password: "" },
    errorMessage: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = (e) => {
    console.log("Submitted");
  };

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
