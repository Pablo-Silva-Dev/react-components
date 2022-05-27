import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 12vw;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  @media (max-width: 1440px) {
    width: 20vw;
  }
  @media (max-width: 1080px) {
    display: none;
  }
`;
