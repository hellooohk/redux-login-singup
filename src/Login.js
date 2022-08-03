import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const inputSearch = useRef();
  const handleLogin = () => {
    dispatch(login(inputSearch.current.value));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="container my-2">
      {isAuthenticated ? (
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      ) : (
        <>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={inputSearch}/>
        </div>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
