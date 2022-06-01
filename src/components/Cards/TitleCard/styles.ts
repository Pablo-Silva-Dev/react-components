import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  min-height: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin: 8px;
  @media (max-width: 1080px) {
    width: 640px;
  }
  @media (max-width: 720px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 92%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 40px;
  border-radius: 8px 8px 0 0;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  margin: 12px 0;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;
