import styled from "styled-components";

export const Container = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  max-width: 240px;
  word-wrap: break-word;
  margin: 8px 0;
`;