import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { doLogin } from "../../store/actions/authActions";
import backgroundImg from "../../assets/background-image.jpg";

const initialForm = {
  username: "",
  email: "",
  password: "",
  error: ""
};

const Login = props => {
  const [loginForm, setLoginForm] = useState(initialForm);

  const handleChange = e => {
    if (loginForm.username && loginForm.email && loginForm.password) {
      setLoginForm({ ...loginForm, error: "" });
    } else {
      setLoginForm({ error: "Please fill in all fields" });
    }
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    console.log(loginForm);
  };

  const loginSubmit = e => {
    e.preventDefault();
    if (loginForm.username && loginForm.email && loginForm.password) {
      const credentials = {
        username: loginForm.username,
        email: loginForm.email,
        password: loginForm.password
      };
      console.log(credentials);
      props.doLogin(credentials, props.history);
      setLoginForm(initialForm);
    } else {
      setLoginForm({ error: "Please fill in all fields" });
    }
  };

  return (
    <StyledDiv>
      <Form onSubmit={e => loginSubmit(e)}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={e => handleChange(e)}
            innerRef={loginForm.username}
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
            innerRef={loginForm.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={e => handleChange(e)}
            innerRef={loginForm.password}
          />
        </FormGroup>
        {props.registerError &&
          props.registerError.password2 &&
          props.registerError.password2.map(e => <p key={e}>{e}</p>)}
        {loginForm.error && <p>{loginForm.error}</p>}
        <Button color="primary">
          {props.loadingUser ? "Launching Game" : "Start Playing"}
        </Button>
        <div>
          <p>Don't have an account yet?</p>
          <Button color="link">
            <Link to="/register">Register Here</Link>
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

export default connect(mapStateToProps, { doLogin })(Login);
