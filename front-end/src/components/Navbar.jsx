import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

import logo from "../image/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div id="top-row">
        <img id="logo" src={logo} alt="logo da apphost" />
        <nav id="nav-btn">
          <button className="btn navegacao">
            <span>
              <MdHotel />
              Reservas
            </span>
          </button>
          <button className="btn navegacao">
            <span>
              <FaHotel />
              Hospedar
            </span>
          </button>
          <div>
            <button className="btn menu">
              <span id="hanb">
                <CiMenuBurger />
              </span>
              <span id="user">
                <FaUserCircle />
              </span>
            </button>
          </div>
        </nav>
      </div>
      <div id="bottom-row">
        <div id="barra">
          <span>
            <CiSearch />
          </span>
          <nav id="search-bar">
            <span>Destino</span>
            <label>
              <input
                id="search-bar-input"
                type="text"
                placeholder="Localização"
              />
            </label>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
