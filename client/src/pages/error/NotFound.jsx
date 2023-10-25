import { LinkedButton } from "components/button/button.linkedButton";
import Navbar from "components/layouts/layout.navBar";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) {
    height: fit-content;
  }

  @media (min-width: 375px) {
    height: fit-content;
  }

  @media (min-width: 425px) {
    height: fit-content;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }

  @media (min-width: 1440px) {
    height: 100vh;
  }
`;

const StyledParagraphe = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.2rem;
  color: #003399;
  margin: 0 10px;

  &:visited {
    color: #ff0101;
  }

  &:hover {
    color: #003399;
  }

  &:active {
    color: #9a3399;
  }
`;

export const NotFound = () => {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <h1>Erreur agent 404</h1>
        <StyledParagraphe align="center">
          La page : {window.location.pathname} n'a pas été trouvée.
          <br />
          Veuillez renseigner une nouvelle URL valide, tel que : "/home", "/", "/events".
        </StyledParagraphe>
        <StyledParagraphe align="center">
          L'agent 404 se fera un plaisir de vous redirigez vers cette
          <StyledLink to="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/404" target="_blank">
            URL
          </StyledLink>
          <LinkedButton to="/">Retour à l'accueil</LinkedButton>
        </StyledParagraphe>
      </StyledContainer>
    </>
  );
};
