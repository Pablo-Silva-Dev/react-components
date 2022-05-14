import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  min-height: 320px;
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: 720px) {
    width: 240px;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 4px;
  margin: 12px 0;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  padding: 8px 4px;
  text-align: right;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const SubTitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 4px;
  text-align: right;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
