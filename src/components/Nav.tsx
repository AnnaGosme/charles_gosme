import * as Styled from "@styledComponents/Nav";

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
  return (
    <Styled.StyledMenu>
      {navLinks.map((navLink) => {
        return (
          <Styled.NavbarLink to={navLink.link}>
            {navLink.name.toUpperCase()}
          </Styled.NavbarLink>
        );
      })}
    </Styled.StyledMenu>
  );
};

export default Nav;
