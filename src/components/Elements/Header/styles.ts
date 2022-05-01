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
  margin-right: 1.2rem;
`;

export const LogoContainer = styled.div`
  padding: 16px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 92%;
  margin: 0 auto;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const ResponsiveMenuContainer = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  margin: 16px;
  @media (max-width: 720px) {
    display: flex;
  }
`;
