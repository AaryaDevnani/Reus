import React, { useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import './styles/Register.css';
import Carousel from 'react-elastic-carousel';
import Wave from 'react-wavify';

const Register = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/login' } };

  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    confirm_password: ''
  });

  const handleOnChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const registerOptions = {
    method: 'POST',
    body: JSON.stringify(userInput),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const registerUser = async () => {
    const response = await fetch('/api/user/register', registerOptions);
    const data = await response.json();
    if (data.error === '') {
      setUserInput({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      });
      navigate(from);
    } else {
      alert(data.error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userInput.password !== userInput.confirm_password) {
      alert('Password does not match');
      return;
    }
    registerUser();
  };

  return (
    <div>
      <div className="RegisterPage">
        <div className="info">
          <h2 className="title">Reus</h2>
          <p className="description">
            Reducing food waste is a delicious way of saving money, helping to
            feed the world and protect the planet.
          </p>
        </div>
        <form className="register-add-form" onSubmit={handleOnSubmit}>
          <div className="loginContainer">
            <div className="regi-form-contro">
              <label className="label">First Name</label>
              <input
                type="text"
                required="required"
                placeholder="Enter your first name"
                pattern="[A-Za-z0-9_]{0,100}"
                name="firstName"
                value={userInput.firstName}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro">
              <label className="label">Last Name</label>
              <input
                type="text"
                required="required"
                placeholder="Enter your last name"
                pattern="[A-Za-z0-9_]{0,100}"
                name="lastName"
                value={userInput.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro">
              <label className="label">Username</label>
              <input
                type="text"
                required="required"
                placeholder="Enter username"
                pattern="[A-Za-z0-9_]{0,100}"
                name="username"
                value={userInput.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro">
              <label className="label">Email</label>
              <input
                type="email"
                required="required"
                name="email"
                placeholder="Enter Email ID"
                value={userInput.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro">
              <label className="label">Address</label>
              <input
                type="text"
                required="required"
                placeholder="Enter address"
                pattern="[A-Za-z0-9\-\/]+\"
                name="address"
                value={userInput.address}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro ">
              <label className="label">Password</label>
              <input
                type="password"
                required="required"
                placeholder="Enter Password"
                name="password"
                value={userInput.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="regi-form-contro ">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                required="required"
                placeholder="Re-enter Password"
                name="confirm_password"
                value={userInput.confirm_password}
                onChange={handleOnChange}
              />
            </div>

            <input type="submit" className="butn butn-block" value="Register" />
            <spam className="go-to">
              Have an Account?{' '}
              <NavLink to="/login" className="hoverLine go-to-login">
                {' '}
                Log In{' '}
              </NavLink>{' '}
            </spam>
          </div>
        </form>
      </div>
      {/* <div >
        <Wave className='regi-second-wave'  fill='rgba(93,188,156,0.5)'
        paused={false}
        options={{
            height: 20,
          amplitude: 20,
          speed: 0.25,
          points: 5
        }}
         />
        <Wave className='regi-wave' fill='#5dbc9c'
        paused={false}
        options={{
            height: 40,
          amplitude: 37,
          speed: 0.25,
          points: 5
        }}
         />
         </div> */}
    </div>
  );
};

export default Register;
