import styled from "styled-components";

export const Container = styled.p`
  font-size: 10px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  cursor: pointer;
  margin: 4px;
`;