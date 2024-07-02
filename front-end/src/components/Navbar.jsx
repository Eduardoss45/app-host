import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

import SearchBar from "./SearchBar";

import logo from "../image/logo.png";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
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
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Navbar;
