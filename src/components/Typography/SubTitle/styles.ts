import styled from "styled-components";

interface TitleProps {
  themeColor: "dark" | "light";
}

export const SubTitle = styled.h3<TitleProps>`
  font-size: ${({ theme }) => theme.sizes.xxlarge};
  font-weight: 500;
  color: ${({ theme, themeColor }) =>
    themeColor === "light" ? theme.colors.white : theme.colors.black};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
