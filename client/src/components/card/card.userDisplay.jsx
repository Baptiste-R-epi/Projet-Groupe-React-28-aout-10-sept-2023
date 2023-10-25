import { Divider } from "components/misc/misc.divider";
import { Box } from "components/styled/styled.box";
import { TextContainer } from "components/styled/styled.textContainer";
import { H1 } from "components/styled/styled.title";
import styled from "styled-components";

export const UserDisplay = ({ user }) => {
  const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border: 1px solid #333;
    }
  `;
  const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
  `;

  return (
    <StyledCard>
        <Divider />
      <Box
        width="148px"
        height="148px"
        display="flex"
        justifycontentcenter="true"
        justifycontentstart="true"
        alignitemscenter="true"
      >
        <StyledImg src={user.picture} alt={user.name} />
      </Box>
      <TextContainer>
        <H1>{user.name}</H1>
        <p>{user.email}</p>
      </TextContainer>
    </StyledCard>
  );
};
