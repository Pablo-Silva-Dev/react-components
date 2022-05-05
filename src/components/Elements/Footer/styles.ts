import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 20vh;
  background-color: ${({ theme }) => theme.colors.black};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: " solutions about questions social developer";
  padding: 12px;
  margin-top: 24vh;
  @media (max-width: 720px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas: "solutions" "about" "questions" "social" "developer";
    grid-gap: 20px;
  }
`;

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: developer;
`;

export const SolutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: solutions;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: about;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: questions;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: social;
  @media (max-width: 720px) {
    margin-left: 8%;
  }
`;

export const SocialTitleContainer = styled.div`
  margin-left: 24px;
  margin-bottom: 8px;
  width: 100%;
`;

export const SocialContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 12px;
`;

export const FooterSubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  margin: 8px 0;
`;

export const FooterText = styled.a`
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.element_base};
  width: 80%;
  cursor: pointer;
  margin: 4px;
`;

export const InfoText = styled.p`
  font-size: 10px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  cursor: pointer;
  margin: 4px;
`;