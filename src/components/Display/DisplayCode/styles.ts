import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.sizes.normal};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary_light};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

