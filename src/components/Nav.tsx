// import '@styles/nav.css';
import styled from "styled-components";
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

const StyledMenu = styled.aside`
  margin: 4rem 2rem 0 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledLink = styled.a`
  background-color: grey;
  padding: 0.5rem;
  font: "Roboto", sans-serif;
  color: white;
`;

const Nav = () => {
  return (
    <StyledMenu>
      {navLinks.map((navLink) => {
        return (
          <StyledLink>
            <NavLink to="/music">{navLink.name.toUpperCase()}</NavLink>
          </StyledLink>
        );
      })}
    </StyledMenu>
  );
};

export default Nav;
