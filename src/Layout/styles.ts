import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

export const CountryCreditContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  cursor: normal;

  & p{
    cursor: normal;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.sizes.small}
  }
`;
