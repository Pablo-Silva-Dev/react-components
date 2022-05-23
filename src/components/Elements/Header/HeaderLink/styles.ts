import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.element_base};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  @media (max-width: 720px){
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;