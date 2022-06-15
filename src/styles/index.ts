import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: auto;
  width: 88vw;
  margin: 0 auto;
  padding: 16px;
  @media (max-width: 1440px) {
    width: 84vw;
  }
  @media (max-width: 1080px) {
    width: 72vw;
  }
  @media (max-width: 720px) {
    width: 98%;
  }
`;

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  @media (max-width: 1440px) {
    width: 640px;
  }
  @media (max-width: 1080px) {
    width: 480px;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 920px;
  @media (max-width: 1080px) {
    width: 480px;
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
  padding: 16px 0;
  width: 100%;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
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

export const IntroductionSection = styled.section`
  width: 100%;
  margin: 24px auto;
`;

export const DownloadSection = styled.section`
  width: 100%;
  margin: 24px auto;
`;

export const ReferencesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px auto;
`;

export const DonationSection = styled.section`
  width: 100%;
  margin: 24px auto;
`;
export const LicenseSection = styled.section`
  width: 100%;
  margin: 24px auto;
`;
