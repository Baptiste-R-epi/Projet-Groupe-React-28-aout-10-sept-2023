import { LinkedButton } from "components/button/button.linkedButton";
import Navbar from "components/layouts/layout.navBar";
import { H1 } from "components/styled/styled.title";

export const Unauthorized = () => {
    return <>
    <Navbar />
      <H1 align="center" pl="1rem">
        Vous n'êtes pas autorisé à accéder à cette page
      </H1>
      <LinkedButton to="/">Retour à l'accueil</LinkedButton>
    </>;
  };
  