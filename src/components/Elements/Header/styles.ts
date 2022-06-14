import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;



