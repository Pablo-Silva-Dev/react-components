import styled from "styled-components";

interface GoogleSignButtonProps {
  themeColor?: "dark" | "light";
}

export const Container = styled.button<GoogleSignButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  width: 240px;
  height: 40px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ themeColor, theme }) =>
    themeColor === "dark" ?  theme.colors.black : theme.colors.white };

&:disabled {
    opacity: 0.8;
    background-color: ${({ theme, themeColor }) => 
    themeColor === "dark" ? theme.colors.black : theme.colors.white};
    cursor: default;
  }
`;

export const Title = styled.h4<GoogleSignButtonProps>`
  color: ${({ themeColor, theme }) =>
    themeColor === "dark" ? theme.colors.white : theme.colors.black};
  margin-left: 12px;
`;
