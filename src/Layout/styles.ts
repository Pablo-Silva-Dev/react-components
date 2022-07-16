import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white100};

  & .footerAttach{
    background-color: ${({ theme }) => theme.colors.black100};
    & p, span {
      color: ${({ theme }) => theme.colors.white500};
      font-size: ${({ theme }) => theme.sizes.small};
      @media(max-width: 720px){
        font-size: ${({ theme }) => theme.sizes.xsmall}
      }
    }
  }

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
    color: ${({ theme }) => theme.colors.white100};
    font-size: ${({ theme }) => theme.sizes.small}
  }
`;
