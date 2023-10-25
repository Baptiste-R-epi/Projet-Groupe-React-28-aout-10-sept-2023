import { LinkedButton } from "components/button/button.linkedButton";
import placeholderImage from "assets/images/placeholder.svg";
import { CardImage } from "components/styled/styled.cardImage";
import { TextContainer } from "components/styled/styled.textContainer";
import { H1 } from "components/styled/styled.title";
import { CardArticle } from "components/styled/styled.cardArticle";

const EventDisplay = ({ event }) => {
  const { uid, image, title_fr, description_fr } = event;

  return (
    <CardArticle>
      <CardImage
        src={image ?? placeholderImage}
        height={"128px"}
        alt="image de l'évènement"
      />
      <TextContainer pl="0.75rem">
        <H1 align="left" pl="0.25rem">
          {title_fr}
        </H1>
        <p dangerouslySetInnerHTML={{ __html: description_fr }}></p>
      </TextContainer>
      <LinkedButton
        to={`/events/${uid}`}
        position="absolute"
        width="fit-content"
        bottom="-1.25rem"
        right="1.25rem"
        z-index="1000"
        children={"En savoir +"}
      />
    </CardArticle>
  );
};

export default EventDisplay;
