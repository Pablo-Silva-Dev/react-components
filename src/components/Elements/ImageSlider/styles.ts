import styled from "styled-components";

export const Container = styled.div`
display: flex
justify-content: flex;
align-items: center;
`;

export const SlickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 320px;
  text-align: center;

  & img {
    align-self: center;
    margin: auto;
    @media (max-width: 720px) {
      width: 80%;
    }
  }
`;
