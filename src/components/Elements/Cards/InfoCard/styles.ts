import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({theme}) => theme.shadows.soft};
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  margin: 8px auto;
  padding: 16px;

  @media (max-width: 1080px) {
    width: 640px;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const TitleCard = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const TextCard = styled.span`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;