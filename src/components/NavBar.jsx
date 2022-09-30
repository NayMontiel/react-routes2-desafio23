import { NavLink } from "react-router-dom";
import ubication from "../assets/img/ubication.png";

const NavBar = () => {
  return (
    <nav className="navBar p-3 mt-2 d-flex justify-content-between">
      <img src={ubication} alt='ubicacion' className="imgUbication" />
      <div>
        <NavLink
          to="/"
          className="link mx-3"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink 
            to="/pokemones"
            className="link"
            style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
            >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
