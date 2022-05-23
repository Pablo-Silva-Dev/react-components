import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;


export const AuthenticationContainer = styled.div`
  margin-right: 1.4rem;
`;


