import styled from "styled-components";

export const Button = ({ children, ...props }) => {
  const StyledButton = styled.button`
    flex-direction: ${props?.flexDirection ?? "row"};
    align-items: ${props?.alignItems ?? "center"};
    justify-content: ${props?.justifyContent ?? "flex-start"};
    width: ${props?.width ?? "auto"};
    height: ${props?.height ?? "auto"};
    padding: ${props?.padding ?? "0.25rem"};
    z-index: ${props?.zIndex};
    top: ${props?.top};
    bottom: ${props?.bottom};
    left: ${props?.left};
    right: ${props?.right};
    margin: ${props?.margin ?? "0.50rem"};
    border: ${props?.borderWidth ?? "2px"} ${props?.borderStyle ?? "solid"}
      ${props?.borderColor ?? "#181529"};
    border-radius: ${props.borderRadius ?? "0.8rem"};
    background-color: ${props?.backgroundColor ?? "#ccc"};
    color: ${props?.color ?? "#000"};
    font-weight: ${props?.fontWeight ?? "bold"};
    font-size: ${props?.fontSize ?? "1.2rem"};
    cursor: ${props?.cursor ?? "pointer"};
    &:hover {
      background-color: ${props?.hoverBackgroundColor ?? "#ccc"};
      color: ${props?.hoverColor ?? "#748692"};
    }
    &:active {
      background-color: ${props?.activeBackgroundColor ?? "#ccc"};
      color: ${props?.activeColor ?? "#748692"};
    }
  `;

  return <StyledButton {...props}>{children}</StyledButton>;
};
