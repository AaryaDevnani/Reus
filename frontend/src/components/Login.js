import React, { useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import './styles/Login.css';
import Wave from 'react-wavify';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../actions/index';

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  });

  const handleOnChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const loginOptions = {
    method: 'POST',
    body: JSON.stringify(userInput),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const loginUser = async () => {
    const response = await fetch('/api/user/login', loginOptions);
    const data = await response.json();
    if (data.error === '') {
      dispatch(loginUserAction({ token: data.token }));
      setUserInput({
        username: '',
        password: ''
      });
      navigate(from);
    } else {
      alert(data.error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div>
      <div className="LoginPage">
        <div className="info">
          <h2 className="title">Reus</h2>
          <p className="description">
            Reducing food waste is a delicious way of saving money, helping to
            feed the world and protect the planet.
          </p>
        </div>
        <form className="login-add-form" onSubmit={handleOnSubmit}>
          <div className="loginContainer">
            <div className="form-contro ">
              <label className="label">Username</label>
              <input
                type="text"
                required="required"
                name="username"
                placeholder="Enter Username"
                value={userInput.username}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-contro ">
              <label className="label">Password</label>
              <input
                type="password"
                required="required"
                placeholder="Enter password"
                name="password"
                value={userInput.password}
                onChange={handleOnChange}
              />
            </div>
            <input type="submit" className="butn butn-block" value="Login" />
            <NavLink to="/register" className="hoverLine go-to-register">
              Create New Account{' '}
            </NavLink>
          </div>
        </form>
      </div>
      <div>
        <Wave
          className="second-wave"
          fill="rgba(93,188,156,0.5)"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.25,
            points: 5
          }}
        />
        <Wave
          className="wave"
          fill="#5dbc9c"
          paused={false}
          options={{
            height: 40,
            amplitude: 37,
            speed: 0.25,
            points: 5
          }}
        />
      </div>
    </div>
  );
};

export default Login;
