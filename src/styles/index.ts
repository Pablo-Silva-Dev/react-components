import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: auto;
  width: 80vw;
  min-height: 80vh;
  padding: 40px;
  @media(max-width: 720px){
    width: 98%;
  }
`;

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  @media (max-width: 1080px) {
    width: 640px;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
  `;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  `;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 240px;
  background-color: ${({ theme }) => theme.colors.element_base};
  `;

export const PropsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  max-height: 480px;
  overflow-x: auto;
  padding: 16px;
  `;
