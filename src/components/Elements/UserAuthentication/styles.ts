import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent !important;
  font-size: ${({ theme }) => theme.sizes.medium};
  width: 100%;
  height: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.medium};
  width: 120px !important;
  height: 32px;
`;