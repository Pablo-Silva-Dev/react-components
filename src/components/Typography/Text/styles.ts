import styled from "styled-components";

interface TitleProps {
  themeColor: "dark" | "light";
}

export const Text = styled.span<TitleProps>`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  color: ${({ theme, themeColor }) =>
    themeColor === "light" ? theme.colors.white : theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
