import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.aside`
  margin: 4rem 2rem 0 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #3b3b3b;
  padding: 3rem;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: grey;
  width: 4.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font: "Roboto", sans-serif;
  color: white;
  &:hover,
  &:focus {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.7rem;
    background-color: #dcdcdc;
    color: black;
    transition: background-color 0.8s ease, color 0.8s ease, padding 0.8s ease;
  }
`;
