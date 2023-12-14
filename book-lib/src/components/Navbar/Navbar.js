import { useRef } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <Link to="/home">
          <MenuBookIcon fontSize="large" sx={{ color: "black" }} />
        </Link>
      </div>
      <div>
        <nav ref={navRef}>
          <Link to="/forums">
            <Button
              variant="text"
              sx={{ color: "black" }}
              startIcon={<LibraryBooksIcon />}
            >
              Forums
            </Button>
          </Link>
          <Link to="/search">
            <Button
              variant="text"
              sx={{ color: "black" }}
              startIcon={<ManageSearchIcon />}
            >
              Search
            </Button>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <div>
        <Link
          to="https://github.com/JoshuaRamc/web-dev-final-frontend"
          target="_blank"
        >
          <GitHubIcon
            fontSize="large"
            style={{ color: "black", marginRight: "25px" }}
          ></GitHubIcon>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
