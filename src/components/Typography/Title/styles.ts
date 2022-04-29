import styled from "styled-components";

interface TitleProps {
  themeColor: "dark" | "light";
}

export const Title = styled.h1<TitleProps>`
  font-size: ${({theme}) => theme.sizes.huge};
  font-weight: bold;
  color: ${({ theme, themeColor }) =>
    themeColor === "light" ? 
    theme.colors.secondary : 
    theme.colors.black};
  max-width: 640px;
  @media(max-width: 1080px) {
    font-size: ${({theme}) => theme.sizes.huge};
    text-align: center;
  }
  @media(max-width: 720px) {
    font-size: ${({theme}) => theme.sizes.xlarge};
  }
`;