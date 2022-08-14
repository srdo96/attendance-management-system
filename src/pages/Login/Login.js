import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-card">
      <div className="card">
        <h1>Login</h1>
        <CustomInput type="text" placeholder="EMAIL" />
        <br />
        <CustomInput type="password" placeholder="PASSWORD" />
        <br />
        <CustomButton label="Login" />
      </div>
    </div>
  );
};

export default Login;
