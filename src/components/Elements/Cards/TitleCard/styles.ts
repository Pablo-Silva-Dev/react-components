import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  min-height: 240px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  margin: 0.8rem;
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 40px;
  border-radius: 8px 8px 0 0;
  z-index: 999;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  margin: 0 auto;
  text-align: center;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Text = styled.span`
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
