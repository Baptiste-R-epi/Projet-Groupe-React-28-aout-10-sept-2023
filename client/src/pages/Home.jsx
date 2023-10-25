import EventDisplay from "components/card/card.eventDisplay";
import Navbar from "components/layouts/layout.navBar";
import { useEffect, useRef, useState } from "react";
import { useQuery, refetch } from "react-query";
import { EventCategoriesInput } from "components/input/input.eventCategories";
import { getAll } from "queries/queries.event";
import { Box } from "components/styled/styled.box";
import { Container } from "components/styled/styled.container";
import { Sidebar } from "components/styled/styled.sidebar";
import { Content } from "components/styled/styled.content";
import { H1 } from "components/styled/styled.title";
import { ScrollableContainer } from "components/styled/styled.scrollableContainer";
import { Spinner } from "components/styled/styled.spinner";

export const Home = () => {
  const [location, setLocation] = useState(null);
  const locationInput = useRef(null);
  const APIrequest = useRef("");
  const dataAgenda = useQuery(
    ["agendaApi", locationInput.current ?? location],
    () => getAll(locationInput.current ?? location, APIrequest.current)
  );
  const APIrequestSet = (value) => {
    APIrequest.current = value;
    dataAgenda.refetch();
  };

  const APILocationSet = (value) => {
    locationInput.current = value;
    dataAgenda.refetch();
  };

  const getLocation = () => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(success, error);
    else console.log("Geolocation not supported");
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  useEffect(() => {
    if (!location) getLocation();
  }, [location]);

  if (dataAgenda.isError) {
    return (
      <>
        <Box>
          <Navbar />
        </Box>
        <Container>
          <Sidebar>
            <EventCategoriesInput
              APIrequestSet={APIrequestSet}
              APILocationSet={APILocationSet}
            />
          </Sidebar>
          <Content>
            <H1 align="left" pl="1rem">
              Une erreur est survenue
            </H1>
          </Content>
        </Container>
      </>
    );
  }
  
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container>
        <Sidebar>
          <EventCategoriesInput
            APIrequestSet={APIrequestSet}
            APILocationSet={APILocationSet}
          />
        </Sidebar>
        <Content>
          {!dataAgenda.isLoading ? (
            <>
              <H1 align="left" pl="1rem">
                Evenements à venir
              </H1>
              <ScrollableContainer>
                {dataAgenda.data?.results.map((data, index) => (
                  <EventDisplay key={index} event={data} />
                ))}
              </ScrollableContainer>
            </>
          ) : (
            <>
              <Spinner />
              <Box>
                <H1 align="left" pl="1rem">
                  En attente de données{" "}
                  <i>
                    (il se peut que votre recherche ne donne lieu à aucun
                    résultat)
                  </i>
                </H1>
              </Box>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};
