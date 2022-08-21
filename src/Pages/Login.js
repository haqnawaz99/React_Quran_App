import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../Utils/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await Api("post", "auth/login", formData);
    if (response.status === 200) {
      toast(response.data.msg);
      localStorage.setItem("auth-token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      alert(response.data.msg);
      history.push("/home");
    } else {
      response.data.errors.map((err) => {
        toast(err.msg);
        return null;
      });
      //   alert(response);
    }
  };

  return (
    <div>
      <ToastContainer />
      Login
      <div>
        <label>Email:</label>
        <input type={"text"} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}

export default Login;
