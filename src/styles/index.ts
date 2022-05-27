import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 64vh;
  padding-top: 40px;
`;

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  @media (max-width: 720px) {
    width: 80%;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 240px;
  background-color: ${({ theme }) => theme.colors.element_base};
`;

export const PropsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  padding: 16px;
`;
