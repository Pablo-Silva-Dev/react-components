import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.element_base};
  margin: 4px 16px;
  word-wrap: break-word;
  cursor: pointer;
  @media (max-width: 720px){
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;