import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./Appcontext";
import Logout from "./Log/Logout";


const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/">
              <h5>{userData.email}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            
            <li className="se-connecter">
              <NavLink exact to="/connexion" >
                <p>Connexion</p>
              </NavLink>
              <li>
              <img src="./img/icons/login.svg" alt="login" />
              </li>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;