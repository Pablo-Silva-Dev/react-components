import styled from "styled-components";

interface GithubSignInButtonProps {
  themeColor?: "dark" | "light";
}

export const Container = styled.button<GithubSignInButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  width: 98%;
  height: 40px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ themeColor, theme }) =>
    themeColor === "dark" ? theme.colors.black : theme.colors.white};

  &:disabled {
    opacity: 0.8;
    background-color: ${({ theme, themeColor }) =>
      themeColor === "dark" ? theme.colors.black : theme.colors.white};
    cursor: default;
  }
`;

export const Title = styled.h4<GithubSignInButtonProps>`
  color: ${({ themeColor, theme }) =>
    themeColor === "dark" ? theme.colors.white : theme.colors.black};
  margin-left: 12px;
  font-size: ${({ theme }) => theme.sizes.medium};
  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
