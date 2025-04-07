import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password });
  
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          navigate('/');
        }
      } catch (err) {
        setError('Invalid email or password');
      }
    };
  
    return (
      <div>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" alt="Logo" />
            </Link>
          </div>
          <nav className="main-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Stories</Link></li>
              <li><Link to="/">News</Link></li>
              {/* <li><Link to="/login">Login</Link></li> */}
            </ul>
            <div className="donate-btn">
              <Link to="/donation">Make a Donation</Link>
            </div>
          </nav>
        </div>
  
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label">Email address</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="form-label">Password</label>
                  </div>
  
                  {error && <p className="text-danger">{error}</p>}
  
                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Sign in
                  </button>
  
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      If you don't have an account <Link to="/register">Register</Link>
                    </p>
                  </div>
  
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
 

export default LogIn
