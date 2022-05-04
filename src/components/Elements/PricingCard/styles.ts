import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: .8rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  @media(max-width:1080px){
    width: 640px;
    margin: 1.2rem auto;
  }
  @media(max-width: 720px){
    width: 80%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem auto;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  margin: .4rem auto;
  text-align: center;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const TextItem = styled.li`
  font-size: ${({ theme }) => theme.sizes.medium};
  list-style: circle;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.element_base};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.element_base};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const PurchaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 800;
  border-radius: 4px;
  width: 160px;
  height: 32px;
  margin: 1.2rem auto;
`;

export const OldPrice = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  text-decoration: line-through;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const DealsPrice = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const RecomendationBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 600;
  z-index: 999;
  position: absolute;
  top: -16px;
  rigth: 25%;
`;