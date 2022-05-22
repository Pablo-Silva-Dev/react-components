import { ReactNode, useState } from "react";
import NextProgressComponent from "../components/Next/NextProgress";
import { Footer } from "../components/Elements/Footer";
import { FooterFirstSection } from "../components/Elements/Footer/FooterFirstSection";
import { FooterFivethSection } from "../components/Elements/Footer/FooterFivethSection";
import { FooterFourthSection } from "../components/Elements/Footer/FooterFourthSection";
import { FooterLink } from "../components/Elements/Footer/FooterLink";
import { FooterSecondSection } from "../components/Elements/Footer/FooterSecondSection";
import { FooterSixthSection } from "../components/Elements/Footer/FooterSixthSection";
import { FooterThirdSection } from "../components/Elements/Footer/FooterThirdSection";
import { FooterTitle } from "../components/Elements/Footer/FooterTitle";
import { Header } from "../components/Elements/Header";
import { ResponsiveMenu } from "../components/Elements/ResponsiveMenu";
import { Container } from "./styles";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

    function openResponsiveMenu() {
        setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
    }
    function closeResponsiveMenu() {
        setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
    }

    return (
        <Container>
            <NextProgressComponent />
            <Header
                firstUrlTitle='Home'
                firstUrlLink='/test'
                secondUrlTitle='ssdfsdfsdfdfjh'
                secondUrlLink='sdjsdfsdfdffh'
                thirdUrlTitle='sdfsdfsdfjh'
                thirdUrlLink='sdsdfsdfsdfjfh'
                fourthUrlTitle='sdfjsdfsdfhsdf'
                fourthUrlLink='sdsdfdsfjfh'
                fivethUrlTitle='sdfdfsdfdsfjhsdf'
                fivethUrlLink='sdjsdfsdfdffh'
                sixthUrlTitle='sdfjfdfffhsdf'
                sixthUrlLink='sddfdsfsdfjfh'
                logoImageAlt='sdfsdfsdfsdf'
                logoImagePath='/logo.png'
                openResponsiveMenu={openResponsiveMenu}
            />
            {isResponsiveMenuOpen &&
                <ResponsiveMenu
                    direction='horizontal'
                    firstUrlTitle='Home'
                    firstUrlLink='sdfsdfsdfsdf'
                    secondUrlTitle='ssdfsdfsdfdfjh'
                    secondUrlLink='sdjsdfsdfdffh'
                    thirdUrlTitle='sdfsdfsdfjh'
                    thirdUrlLink='sdsdfsdfsdfjfh'
                    fourthUrlTitle='sdfjsdfsdfhsdf'
                    fourthUrlLink='sdsdfdsfjfh'
                    fivethUrlTitle='sdfdfsdfdsfjhsdf'
                    closeResponsiveMenu={closeResponsiveMenu}
                />
            }
            <main>{children}</main>
            <Footer>
                <FooterFirstSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterSecondSection>
                <FooterThirdSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterThirdSection>
                <FooterFourthSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterFourthSection>
                <FooterFivethSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterFivethSection>
                <FooterSixthSection>
                    <FooterTitle
                        content='Departamento'
                    />
                    <FooterLink
                        content='Placas de vídeo'
                        url='/'
                    />
                </FooterSixthSection>
            </Footer >
        </Container>

    )
}