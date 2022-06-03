import styled from "styled-components";

interface PrimaryButtonProps {
  size?: "tiny" | "small" | "medium" | "large";
}

export const Container = styled.button<PrimaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 640px;
  width: ${({ size }) =>
    size === "large"
      ? "240px"
      : size === "tiny"
      ? "80px"
      : size === "small"
      ? "120px"
      : "160px"};
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};

  &:disabled{
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

`;
