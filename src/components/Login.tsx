import React from "react";
import styles from './Login.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = React.memo(() => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const notify = () => toast("Login Failed");

  const options = {
    autoClose: 5000,
    position: toast.POSITION.TOP_CENTER,
    closeOnClick: true,
    closeButton: false,
  };
  const Alert = (type: string, message: string) => {
    switch (type) {
      case 'error':
        return toast.error(message, options);
      case 'success':
        return toast.success(message);
      default:
        return toast(message);
    }
  };

  const loginDetails = {
    username: userName,
    password: password,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const login = async(e: { preventDefault: () => void; }) => {
    e.preventDefault()
    axios.post("http://localhost:3001/auth/login", loginDetails, axiosConfig)
    .then((res) => {
        localStorage.setItem("user",JSON.stringify({access_token:res.data.access_token}))
        Alert('success',"Login successfully")
        if(res){
          navigate("/dashboard")
        }
      })
      .catch((err) => {
        // notify()
        Alert('error', 'Invalid username and password');
        console.log("ERROR: ", err);
      });

  };

  

  return (
    <form>
          <ToastContainer />

      <div className={styles.box}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="email address"
          onChange={(e) => setUserName(e.target.value)}
          className={styles.email}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.email}
        />
        <div className={styles.loginButton}>
          <button className={styles.btn} onClick={login}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
});

export default Login
