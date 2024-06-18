import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "@styles/nav.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "home", link: "/" },
  { name: "law & policy", link: "/law-policy" },
  { name: "music", link: "/music" },
  { name: "videos", link: "/videos" },
  { name: "photos", link: "/photos" },
  { name: "xr", link: "/xr" },
  { name: "contact", link: "/contact" },
];

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
        <div className="links" id={showLinks ? 'hidden' : ''}>
          {navLinks.map((navLink) => {
            return (
              <NavLink onClick={() => setShowLinks(!showLinks)} to={navLink.link}>{navLink.name.toUpperCase()}</NavLink>
            );
          })}
        </div>
        <button onClick={() => setShowLinks(!showLinks)}><MenuIcon fontSize="large"/></button>
    </div>
  );
};

export default Nav;
