import styled from "styled-components";

interface TextLinkProps {
  themeColor: "dark" | "light";
}

export const TextLink = styled.a<TextLinkProps>`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  color: ${({ theme, themeColor }) =>
    themeColor === "light" ? theme.colors.white : theme.colors.text};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;
