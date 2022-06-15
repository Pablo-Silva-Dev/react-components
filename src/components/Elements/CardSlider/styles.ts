import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  background-color: red;
  @media (max-width: 720px) {
    width: 98%;
    margin: 0 auto;
  }

  & .carouselContainer{
    background-color: cyan;
    width: 100%;
    @media (max-width: 720px) {
    width: 98%;
    margin: 0 auto;
  }
  }

`;
