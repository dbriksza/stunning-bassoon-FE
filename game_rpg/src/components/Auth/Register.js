import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { doRegister } from "../../store/actions/authActions";
import backgroundImg from "../../assets/background-image.jpg";

const initialForm = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  error: ""
};

const Register = props => {
  const [registerForm, setRegisterForm] = useState(initialForm);

  const handleChange = e => {
    if (
      registerForm.username &&
      registerForm.email &&
      registerForm.password1 &&
      registerForm.password2
    ) {
      setRegisterForm({ ...registerForm, error: "" });
    } else {
      setRegisterForm({ error: "Please fill in all fields" });
    }
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    console.log(registerForm);
  };

  const registerSubmit = e => {
    e.preventDefault();
    if (
      registerForm.username &&
      registerForm.email &&
      registerForm.password1 &&
      registerForm.password2
    ) {
      const credentials = {
        username: registerForm.username,
        email: registerForm.email,
        password1: registerForm.password1,
        password2: registerForm.password2
      };
      console.log(credentials);
      props.doRegister(credentials, props.history);
      setRegisterForm(initialForm);
    } else {
      setRegisterForm({ error: "Please fill in all fields" });
    }
  };

  return (
    <StyledDiv>
      <Form onSubmit={e => registerSubmit(e)}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={e => handleChange(e)}
            innerRef={registerForm.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={e => handleChange(e)}
            innerRef={registerForm.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password1">Password</Label>
          <Input
            type="password1"
            name="password1"
            id="password1"
            placeholder="Password"
            onChange={e => handleChange(e)}
            innerRef={registerForm.password1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password2">Confirm Password</Label>
          <Input
            type="password2"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            onChange={e => handleChange(e)}
            innerRef={registerForm.password2}
          />
        </FormGroup>
        {props.registerError &&
          props.registerError.password2 &&
          props.registerError.password2.map(e => <p key={e}>{e}</p>)}
        {registerForm.error && <p>{registerForm.error}</p>}
        <Button color="primary">
          {props.loadingUser ? "Launching Game" : "Start Playing"}
        </Button>
        <div>
          <p>Already have an account?</p>
          <Button color="link">
            <Link to="/">Login Here</Link>
          </Button>
        </div>
      </Form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;

  form {
    border-radius: 1.25rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    background-color: white;
    min-width: 40%;
    padding: 1rem;
    border-radius;
    
    div:last-child {
      display: flex;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
  button:nth-of-type(1) {
    margin: 0 auto;
    width: 60%;
  }
  p {
    flex: 2;
    margin: 0;
    min-width: 50%;
    padding: 6px 0;
    
  }
  .btn.btn-link {
    flex: 1;
    padding: 6px 0;
  }
`;

const mapStateToProps = state => {
  return {
    loadingUser: state.auth.loadingUser,
    register: state.auth.registerError
  };
};

export default connect(mapStateToProps, { doRegister })(Register);
