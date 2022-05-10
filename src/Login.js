import "./Login.css";
import React from "react";
import { FaAward } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import  from "react-bootstrap/Button";

function Login() {
  //   const { register,  } = useForm();
  return (
    <div>
      <div className="container">
        <div className="innerbox">
          <div className="title">
           

            <h1 class="log-in">  <FaAward />  Your Event</h1>

           
          </div>

          <div className="reg-box">
            <h3>online rregistration</h3>
          </div>
          <div className="Login"></div>
          <div>
            <form>
              <div className="namerow">
                <div>
                  <label>FirstName</label>
                  <input name="name" type="text" />
                </div>
                <div className="last">
                  <label>Last Name </label>
                  <input name="name" type="text" />
                </div>
              </div>

              <label>email</label>
              <input name="mail" type="text" />
              <label>Company(if applicable)</label>
              <input name="address" type="textArea" />

              <label>Physicaladdress</label>
              <input name="address" type="textArea" />
              <label>Date</label>
              <input name="date" type="date" />

              <input className="submitButton" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
