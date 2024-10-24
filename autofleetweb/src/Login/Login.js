import React, { useState, useEffect } from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom'; // Import Redirect from React Router


//Bootstrap
import { Form, Button, Alert, Modal, Container } from 'react-bootstrap';
import logo from './../img/logo.png';


const Login = () => {
    return(
        <div className="login">
            <div className="row align-items-center justify-content-center min-vh-100">
                {/* Left Side with Logo and Text */}
                <div className="left-side col-md-5 d-none d-md-block text-center text-white p-5">
                    <div className="logo-section">
                        <img src={logo} alt="AutoFleet Logo" className="logo" />
                        <h1 className="mt-1">AutoFleet</h1>
                        <h4>FLEET MANAGEMENT SYSTEM</h4>
                    </div>
                </div>

                {/* Right Side with Form */}
                <div className="right-side bg-white col-md-4 p-5 rounded shadow">
                    <h2 className="text-center mb-4">LOGIN</h2>

                    <form>
                        <div className="form-group email-form mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group pass-form mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>

                        <div className="forgot-pass text-center">
                            <a href="#" className="medium">Forgot Password?</a>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary w-50 mt-5 mb-3">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        
    )
}

export default Login;