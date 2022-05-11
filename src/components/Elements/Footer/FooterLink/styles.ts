import styled from "styled-components";

export const Container = styled.a`
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.element_base};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  cursor: pointer;
  margin: 4px;
  @media (max-width: 720px){
    margin: auto;
    width: 100%;
    text-align: center;
  }
`;