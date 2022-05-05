import styled from "styled-components";

export const Container = styled.div`
display: flex
justify-content: flex;
align-items: center;
margin: 12px;
`;

export const SlickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 320px;
  margin: 16px;
  text-align: center;

  & img {
    align-self: center;
    margin: auto;
    max-width: 1024px;
    width: 80%;
  }
`;
