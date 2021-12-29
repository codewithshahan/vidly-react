import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

export default class form extends Component {
  state = {
    data: {},
    errorMessage: {},
  };

  validate = () => {
    const { data } = this.state;

    const options = { abortEarly: false };

    const { error } = Joi.validate(data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      return errors;
    }
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: current }) => {
    const { data, errorMessage } = this.state;

    const errors = { ...errorMessage };
    const newError = this.validateProperty(current);
    if (newError) errors[current.name] = newError;
    else delete errors[current.name];
    this.setState({ errorMessage: errors });
    const account = { ...data };
    account[current.name] = current.value;
    this.setState({ data: account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errorMessage: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary mt-3">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errorMessage } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errorMessage[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errorMessage } = this.state;

    return (
      <Select
        name={name}
        label={label}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errorMessage[name]}
      />
    );
  };
}
