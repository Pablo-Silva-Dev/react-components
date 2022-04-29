import styled from "styled-components";

interface TitleProps {
  themeColor: "dark" | "light";
}

export const Title = styled.h1<TitleProps>`
  font-size: ${({theme}) => theme.sizes.huge};
  font-weight: 700;
  color: ${({ theme, themeColor }) =>
    themeColor === "light" ? 
    theme.colors.secondary : 
    theme.colors.black};
  @media(max-width: 1080px) {
    font-size: ${({theme}) => theme.sizes.huge};
  }
  @media(max-width: 720px) {
    font-size: ${({theme}) => theme.sizes.xlarge};
  }
`;