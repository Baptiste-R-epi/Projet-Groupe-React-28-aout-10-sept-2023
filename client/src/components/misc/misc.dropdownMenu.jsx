import { styled } from "styled-components";
import { ReactComponent as UserLogo } from "assets/images/user.svg";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledList = styled.ul`
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  &:active {
    background-color: #ccc;
    color: #000;
  }
`;

const StyledRelativeContainer = styled.div`
  position: relative;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};
  border: none;
`;

const StyledAbsoluteContainer = styled.div`
  position: absolute;
  right: 0;
  background-color: #a1a1a1;
  border: 1px solid #111;
  z-index: 1100;
`;

const DropdownMenu = ({ open, onClick }) => {
  let user = JSON.parse(localStorage.getItem("user")) || null;

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (user) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  }, [user]);

  if (open) {
    return (
      <StyledContainer>
        {user?.picture ? (
          <img
            src={user.picture}
            style={{ margin: "0.5rem", width: "40px", height: "40px" }}
            onClick={onClick}
          />
        ) : (
          <UserLogo style={{ margin: "0.5rem" }} onClick={onClick} />
        )}
        <StyledRelativeContainer>
          <StyledAbsoluteContainer>
            <StyledList>
              {user ? (
                <>
                  <StyledListItem>
                    <StyledLink to="/auth">Mon profil</StyledLink>
                  </StyledListItem>
                  <Divider color="#111" />
                  <StyledListItem>
                    <StyledLink to="/home" onClick={handleLogout}>
                      Deconnexion
                    </StyledLink>
                  </StyledListItem>
                </>
              ) : (
                <>
                  <StyledListItem>
                    <StyledLink to="/auth">Connexion / Inscription</StyledLink>
                  </StyledListItem>
                </>
              )}
            </StyledList>
          </StyledAbsoluteContainer>
        </StyledRelativeContainer>
      </StyledContainer>
    );
  } else {
    return (
      <>
        {user?.picture ? (
          <img
            src={user.picture}
            style={{ margin: "0.5rem", width: "40px", height: "40px" }}
            onClick={onClick}
          />
        ) : (
          <UserLogo style={{ margin: "0.5rem" }} onClick={onClick} />
        )}
      </>
    );
  }
};

export default DropdownMenu;
