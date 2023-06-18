import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import './header.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="headerStyle">
      <div className="containerStyle">
        <p className="welcomeStyle">
          Welcome to BizTrip App.
        </p>
        <div className="authButtons">
          {Auth.loggedIn() ? (
            <>
              <Link className="btnPrimaryStyle" to="/me">
                View My Profile
              </Link>

              <Link className="btnLightStyle" to="/alltrips">
                All Trips
              </Link>

              <Link className="btnLightStyle" to="/addnewtrip">
                Add Trip
              </Link>
              
              <button className="btnLightStyle" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div className="authButtons">
              <Link className="btnPrimaryStyle" to="/login">
                Login
              </Link>
              <Link className="btnLightStyle" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
