import Modal from "react-modal";
import styled from "styled-components";

interface CookieModalProps {
  showAnimation?: boolean;
}

export const Container = styled(Modal) <CookieModalProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  height: 160px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.colors.white100};
  position: absolute;
  bottom: 0;
  margin: auto;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  a, h3{
      color: ${(props) => props.theme.colors.white100}
  }
`;

interface PrimaryButtonProps {
  size?: "tiny" | "small" | "medium" | "large";
}

export const Button = styled.button<PrimaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: 8px auto;
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
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.medium};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  text-align: justify;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xxlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;


