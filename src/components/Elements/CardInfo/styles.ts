import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 320px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  margin: 0.8rem;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 1080px) {
    width: 640px;
    margin: 0.8rem auto;
  }
  @media (max-width: 720px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const TitleCard = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const TextCard = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.element_base};
  width: 80%;
  text-align: center;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;