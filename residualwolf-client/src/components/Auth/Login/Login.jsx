import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../../HomeNavbar/Navbar/Navbar";
import axios from "axios";
import swal from "sweetalert";
import {
  _BASE_URL,
} from "../../../ApiUrls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return swal("", "Enter the valid Details", "error");
    }
    axios
      .post(
        _BASE_URL+"/users/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {        
        if (res.data.message) {          
          return swal("", res.data.message, "error");
        }        
        window.localStorage.setItem("token", res.data.token);     
        window.localStorage.setItem("role", res.data.result.role);     

        if (res.data.result.role == "user") {
          swal("", "You are Logged in", "success");
          window.location.href = "/";
        } else if (res.data.result.role == "admin") {
          swal("", "You are Logged in", "success");
          window.location.href = "/admin/dashboard";
        }
      })
      .catch((err) => {
        console.log(err.response.data.message)
        swal("", err.response.data.message, "error") 
      });
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-5">
            <div className="">
              <h2 className="text-center text-white font-bold mt-5 mb-4">
                Sign in to your account
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password (Min 6 chars.)"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <Link to="/signup">
                    {" "}
                    <div className="font-demi black-hover text-white mt-4 py-3 px-2">
                      Become a member ?{" "}
                      <span className="ml-2 text-white">Signup</span>
                    </div>
                  </Link>
                  <p className="text-white font-demi black-hover mt-4 py-3 px-3">
                    Forgot Password
                  </p>
                </div>

                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue"
                    type="submit"
                  >
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
