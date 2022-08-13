import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <CustomInput type="text" placeholder="EMAIL" />
      <br />
      <CustomInput type="password" placeholder="PASSWORD" />
      <br />
      <CustomButton label="Login" />
    </div>
  );
};

export default Login;
