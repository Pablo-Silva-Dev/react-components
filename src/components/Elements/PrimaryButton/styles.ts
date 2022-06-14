import styled from "styled-components";

interface PrimaryButtonProps {
  size?: "tiny" | "small" | "medium" | "large";
}

export const Container = styled.button<PrimaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
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
  font-size: ${({ theme }) => theme.sizes.medium};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 72%;
`;
