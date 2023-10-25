import { styled } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogo from "assets/images/logo.png";

import DropdownMenu from "components/misc/misc.dropdownMenu";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
  justify-content: center;
  border: 1px solid #aaa;
`;

const NavBarElement = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 10px;
`;

const Logo = styled.img.attrs({
  src: imgLogo,
  alt: "Logo du site de sorties",
})`
  width: 40px;
  height: 40px;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const page = window.location.pathname === "/home" ? "home" : "other";

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavBarContainer>
      <NavBarElement>
        <Logo
          onClick={() => {
            page === "home" ? console.log(page) : navigate("/home");
          }}
        />
        <DropdownMenu onClick={handleOpen} open={open} />
      </NavBarElement>
    </NavBarContainer>
  );
};

export default Navbar;
