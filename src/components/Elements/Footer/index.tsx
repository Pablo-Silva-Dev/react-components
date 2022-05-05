import {
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from "react-icons/fa";
import {
    Container,
    SolutionsContainer,
    AboutContainer,
    QuestionsContainer,
    SocialContainer,
    FooterSubTitle,
    FooterText,
    SocialTitleContainer,
    SocialContentContainer,
    DeveloperContainer,
    InfoText
} from './styles';
import { useTheme } from 'styled-components';

interface FooterProps {
    firstColTitle?: string;
    secondColTitle?: string;
    thirdColTitle?: string;
    fourthColTitle?: string;
    firstColFirstSubTitle?: string;
    firstColSecondSubTitle?: string;
    firstColThirdSubTitle?: string;
    firstColFourthSubTitle?: string;
    firstColFivethSubTitle?: string;
    secondColFirstSubTitle?: string;
    secondColSecondSubTitle?: string;
    secondColThirdSubTitle?: string;
    secondColFourthSubTitle?: string;
    secondColFivethSubTitle?: string;
    thridColFirstSubTitle?: string;
    thridColSecondSubTitle?: string;
    thridColThirdSubTitle?: string;
    thridColFourthSubTitle?: string;
    thridColFivethSubTitle?: string;
    fourthColFirstSubTitle?: string;
    fourthColSecondSubTitle?: string;
    fourthColThirdSubTitle?: string;
    fourthColFourthSubTitle?: string;
    fourthColFivethSubTitle?: string;
    firstColFirstSubUrl?: string;
    firstColSecondSubUrl?: string;
    firstColThirdSubUrl?: string;
    firstColFourthSubUrl?: string;
    firstColFivethSubUrl?: string;
    secondColFirstSubUrl?: string;
    secondColSecondSubUrl?: string;
    secondColThirdSubUrl?: string;
    secondColFourthSubUrl?: string;
    secondColFivethSubUrl?: string;
    thridColFirstSubUrl?: string;
    thridColSecondSubUrl?: string;
    thridColThirdSubUrl?: string;
    thridColFourthSubUrl?: string;
    thridColFivethSubUrl?: string;
    fourthColFirstSubUrl?: string;
    fourthColSecondSubUrl?: string;
    fourthColThirdSubUrl?: string;
    fourthColFourthSubUrl?: string;
    fourthColFivethSubUrl?: string;
}


export function Footer({
    firstColTitle,
    secondColTitle,
    thirdColTitle,
    fourthColTitle,
    firstColFirstSubTitle,
    firstColSecondSubTitle,
    firstColThirdSubTitle,
    firstColFourthSubTitle,
    firstColFivethSubTitle,
    secondColFirstSubTitle,
    secondColSecondSubTitle,
    secondColThirdSubTitle,
    secondColFourthSubTitle,
    secondColFivethSubTitle,
    thridColFirstSubTitle,
    thridColSecondSubTitle,
    thridColThirdSubTitle,
    thridColFourthSubTitle,
    thridColFivethSubTitle,
    fourthColFirstSubTitle,
    fourthColSecondSubTitle,
    fourthColThirdSubTitle,
    fourthColFourthSubTitle,
    fourthColFivethSubTitle,
    firstColFirstSubUrl,
    firstColSecondSubUrl,
    firstColThirdSubUrl,
    firstColFourthSubUrl,
    firstColFivethSubUrl,
    secondColFirstSubUrl,
    secondColSecondSubUrl,
    secondColThirdSubUrl,
    secondColFourthSubUrl,
    secondColFivethSubUrl,
    thridColFirstSubUrl,
    thridColSecondSubUrl,
    thridColThirdSubUrl,
    thridColFourthSubUrl,
    thridColFivethSubUrl,
    fourthColFirstSubUrl,
    fourthColSecondSubUrl,
    fourthColThirdSubUrl,
    fourthColFourthSubUrl,
    fourthColFivethSubUrl
}: FooterProps) {
    const theme = useTheme()

    function openExternUrl(url: string) {
        return window.open(url, '_blank')
    }

    return (
        <Container>

            <SolutionsContainer>
                <FooterSubTitle>
                    {firstColTitle}
                </FooterSubTitle>
                <FooterText
                    href={firstColFirstSubUrl}
                >
                    {firstColFirstSubTitle}
                </FooterText>
                <FooterText
                    href=''
                >
                    Catálogo virtual
                </FooterText>
                <FooterText
                    href=''
                >
                    Landing page para vendas de infoprodutos
                </FooterText>
            </SolutionsContainer>
            <AboutContainer>
                <FooterSubTitle>
                    Sobre
                </FooterSubTitle>
                <FooterText
                    href=''
                >
                    Politica de privacidade
                </FooterText>
                <FooterText>
                    Termos de uso
                </FooterText>
            </AboutContainer>
            <QuestionsContainer>
                <FooterSubTitle>
                    Dúvidas
                </FooterSubTitle>
                <FooterText
                    href=''
                >
                    Perguntas frequentes
                </FooterText>
            </QuestionsContainer>
            <SocialContainer>
                <SocialTitleContainer>
                    <FooterSubTitle>
                        Redes sociais
                    </FooterSubTitle>
                </SocialTitleContainer>
                <SocialContentContainer>
                    <FaInstagramSquare
                        size={32}
                        color={theme.colors.error}
                        onClick={() => openExternUrl('https://www.instagram.com/pablosilva.dev/')}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                    <FaGithubSquare
                        size={32}
                        color={theme.colors.white}
                        onClick={() => openExternUrl('https://github.com/Pablo-Silva-Dev')}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                    <FaLinkedin
                        size={32}
                        color={theme.colors.primary}
                        onClick={() => openExternUrl('https://www.linkedin.com/in/pablo-silva-76b521156/')}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </SocialContentContainer>
            </SocialContainer>
            <DeveloperContainer>
                <InfoText>
                    Desenvolvido por PabloSilvaDev
                </InfoText>
                <InfoText>
                    suportepablosilvadev@gmail.com
                </InfoText>
                <InfoText>
                    PabloSilvaDev - 2022
                </InfoText>
            </DeveloperContainer>
        </Container>
    )
}