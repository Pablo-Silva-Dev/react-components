import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 4px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  & button {
    margin-bottom: 8px;
  }
`;

export const Divider = styled.div`
  width: 92%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
`;

export const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 400;
  margin: 16px auto;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  margin: 16px auto;
  text-align: center;
  width: 92%;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

export const ForgotPasswordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 40px;
  margin: 32px auto 0;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary_light};
  }
`;
