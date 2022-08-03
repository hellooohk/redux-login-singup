import React from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const isAuthenticated =  useSelector((state)=> state.auth.isAuthenticated);
  const username = useSelector((state)=> state.auth.username);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" herf="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" herf="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
                {isAuthenticated && <span>Welcome {username}</span>}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
