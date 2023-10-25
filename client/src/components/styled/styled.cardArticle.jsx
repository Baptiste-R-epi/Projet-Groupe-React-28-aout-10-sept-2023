import styled from "styled-components";

export const CardArticle = styled.article`
  display: flex;
  position: relative;
  background-color: #9aaab7;
  flex-direction: ${(props) =>
    props.flexdirectioncolumn
      ? "column"
      : props.flexdirectionrow
      ? "row"
      : props.flexdirectionrowreverse
      ? "row-reverse"
      : props.flexdirectioncolumnreverse
      ? "column-reverse"
      : "row"};
  justify-content: flex-start;

  grid-area: content;
  border: 4px solid #748692;
  border-radius: 0.8rem;
  & > img {
    width: 128px;
  }

  @media (min-width: 320px) {
    flex-direction: column;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    justify-content: flex-start;

    & > img {
      width: 128px;
    }
  }

  @media (min-width: 375px) {
    flex-direction: ${(props) =>
      props.flexdirectioncolumn
        ? "column"
        : props.flexdirectionrow
        ? "row"
        : props.flexdirectionrowreverse
        ? "row-reverse"
        : props.flexdirectioncolumnreverse
        ? "column-reverse"
        : "row"};
    justify-content: flex-start;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    & > img {
      width: 128px;
    }
  }

  @media (min-width: 425px) {
    flex-direction: ${(props) =>
      props.flexdirectioncolumn
        ? "column"
        : props.flexdirectionrow
        ? "row"
        : props.flexdirectionrowreverse
        ? "row-reverse"
        : props.flexdirectioncolumnreverse
        ? "column-reverse"
        : "row"};
    justify-content: flex-start;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    & > img {
      width: 128px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: ${(props) =>
      props.flexdirectioncolumn
        ? "column"
        : props.flexdirectionrow
        ? "row"
        : props.flexdirectionrowreverse
        ? "row-reverse"
        : props.flexdirectioncolumnreverse
        ? "column-reverse"
        : "row"};
    justify-content: flex-start;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    & > img {
      width: 128px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: ${(props) =>
      props.flexdirectioncolumn
        ? "column"
        : props.flexdirectionrow
        ? "row"
        : props.flexdirectionrowreverse
        ? "row-reverse"
        : props.flexdirectioncolumnreverse
        ? "column-reverse"
        : "row"};
    justify-content: flex-start;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    & > img {
      width: 128px;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: ${(props) =>
      props.flexdirectioncolumn
        ? "column"
        : props.flexdirectionrow
        ? "row"
        : props.flexdirectionrowreverse
        ? "row-reverse"
        : props.flexdirectioncolumnreverse
        ? "column-reverse"
        : "row"};
    justify-content: flex-start;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
    & > img {
      width: 128px;
    }
  }
`;
