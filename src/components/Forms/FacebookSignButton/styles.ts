import styled from "styled-components";

interface GoogleSignButtonProps {
  themeColor: "dark" | "light";
}

export const Container = styled.button<GoogleSignButtonProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  height: 40px;
  border-radius: 4px;
  box-shadow: ${({theme}) => theme.shadows.soft};
  background-color: ${({ themeColor, theme }) =>
    themeColor === "light" ? theme.colors.white : theme.colors.black};
  color: ${({ themeColor, theme }) =>
    themeColor === "light" ? theme.colors.black : theme.colors.white};
  &:disabled {
    opacity: .8;
  }
`;
