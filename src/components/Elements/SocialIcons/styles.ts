import styled from "styled-components";

interface IconProps {
  iconsSize?: "tiny" | "small" | "medium" | "large";
}

export const Container = styled.div`
  display: flex;
  width: 240px;
  margin: 12px auto;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  background: transparent;
`;
