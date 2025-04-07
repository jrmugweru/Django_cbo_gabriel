import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";


const register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    // Handle Input Change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle Form Submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
  
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
  
      try {
        const response = await axios.post("https://django-cbo-gabriel-2.onrender.com/api/register/", {
          email: formData.email,
          password: formData.password,
        });
  
        if (response.status === 201 || response.status === 200) {
          setSuccess("Registration successful! Redirecting to login...");
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (err) {
        setError(
          err.response?.data?.email?.[0] || 
          err.response?.data?.password?.[0] || 
          "Registration failed. Please try again."
        );
      }
    };
  
    return (
      <div className="register-page">
        {/* Navbar */}
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" alt="Logo" />
            </Link>
          </div>
  
          
        </div>
  
        {/* Register Form */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
  
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Register Illustration"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label" htmlFor="email">Email address</label>
                  </div>
  
                  {/* Password */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
  
                  {/* Confirm Password */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                  </div>
  
                  {/* Register Button */}
                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Register
                  </button>
  
                  {/* Already have an account? */}
                  <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default register
