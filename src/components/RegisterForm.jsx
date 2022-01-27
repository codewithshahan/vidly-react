import React from "react";
import Joi from "joi-browser";
import form from "./common/form";
import { register } from "../services/userService";
import { toast } from "react-toastify";
import { getWithJwt } from "../services/authService";

export default class RegisterForm extends form {
  state = {
    data: { username: "", password: "", name: "" },
    errorMessage: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  async doSubmit() {
    try {
      const response = await register(this.state.data);
      getWithJwt(response.headers["x-auth-token"]);
      toast.success("Success");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Already registered");
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2>Register</h2>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
        </div>

        {this.renderButton("Register")}
      </form>
    );
  }
}
