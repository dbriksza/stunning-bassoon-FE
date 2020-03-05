import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <p>something</p>
    </div>
  );
};

export default Register;
