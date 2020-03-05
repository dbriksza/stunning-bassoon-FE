import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { doRegister } from "../../store/actions/authActions";

const initialForm = {
  username: "",
  password1: "",
  password2: "",
  error: ""
};

const Register = props => {
  const [registerForm, setRegisterForm] = useState(initialForm);

  const handleChange = e => {
    if (
      registerForm.username &&
      registerForm.password1 &&
      registerForm.password2
    ) {
      setRegisterForm({ ...registerForm, error: "" });
    } else {
      setRegisterForm({ error: "Please fill in all fields" });
    }
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const register = () => {
    if (
      registerForm.username &&
      registerForm.password1 &&
      registerForm.password2
    ) {
      const credentials = {
        username: registerForm.username,
        password1: registerForm.password1,
        password2: registerForm.password2
      };
      props.doRegister(credentials, this.props.history);
      setRegisterForm(initialForm);
    } else {
      setRegisterForm({ error: "Please fill in all fields" });
    }
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password1">Password</Label>
          <Input
            type="password1"
            name="password1"
            id="password1"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password2">Confirm Password</Label>
          <Input
            type="password2"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
          />
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loadingUser: state.auth.loadingUser,
    register: state.auth.registerError
  };
};

export default connect(mapStateToProps, { doRegister })(Register);
