import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 320px;
  min-height: 160px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 700;
  margin: 8px auto;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
