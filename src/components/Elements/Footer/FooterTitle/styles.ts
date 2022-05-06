import styled from "styled-components";

export const Container = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  max-width: 240px;
  word-wrap: break-word;
  margin: 40px 0 4px;
  @media (max-width: 720px){
    margin: 40px auto 0;
    width: 100%;
    text-align: center;
  }
`;