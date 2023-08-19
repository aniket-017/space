import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../actions/userActions";
import './RegisterPage.css'; // Import your CSS file
import Card from "./Card.js"
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.user);

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isLogin) {
      // Dispatch login action
      dispatch(login(formData.email, formData.password));
    } else {
      // Dispatch register action
      dispatch(register(formData));
    }
  };

  if (isAuthenticated) {
    return  navigate('/card');
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {isLogin && (
          <p className="forgot-link">Forgot Password?</p>
        )}
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : isLogin ? "Login" : "Register"}
        </button>
        <p onClick={toggleForm} className="toggle-link">
          {isLogin ? "Need to register?" : "Already registered? Login"}
        </p>
        {error && <p className="error-message">{error}</p>}
        {isAuthenticated && <p className="success-message">Logged in successfully!</p>}
      </div>
    </div>
  );
};

export default AuthPage;
