import { ReactNode, useState } from "react";
import { useTheme } from "styled-components";
import { Drawer } from "../components/Elements/Drawer";
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
import { DrawerButton } from "../components/Elements/DrawerButton";
import { HeaderLogoContainer } from "../components/Elements/Header/HeaderLogoContainer";
import { Logo } from "../components/Elements/Logo";
import { Nav } from "../components/Elements/Nav";
import { NavLink } from "../components/Elements/Nav/NavLink";
import { NavTitle } from "../components/Elements/Nav/NavTitle";
import NextProgressComponent from "../components/Next/NextProgress";
import {
    animationComponentsLinkList,
    cardsLinkList,
    elementsComponentsLinkList,
    formComponentsLinkList,
    modalomponentsLinkList,
    nextComponentsLinkList,
    typographyComponentsLinkList
} from '../data/componentsListLinks';
import { Container, MainContainer } from "./styles";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const theme = useTheme()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <Container>
            <NextProgressComponent />
            <Header>
                {isDrawerOpen &&
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        direction='left'
                    >
                        <NavTitle
                            content='Animations'
                        />
                        {animationComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}
                        <NavTitle
                            content='Card'
                        />
                        {cardsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}

                        <NavTitle
                            content='Elements'
                        />
                        {elementsComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}
                        <NavTitle
                            content='Forms'
                        />
                        {formComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}

                        <NavTitle
                            content='Modals'
                        />
                        {modalomponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}

                        <NavTitle
                            content='Next'
                        />
                        {nextComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}

                        <NavTitle
                            content='Next'
                        />
                        {typographyComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                            />
                        ))}
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={toggleDrawer}
                    
                />

                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.png'
                        size='medium'
                    />
                </HeaderLogoContainer>


            </Header>
            <MainContainer>
                <Nav>
                    <NavTitle
                        content='Animations'
                    />
                    {animationComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}
                    <NavTitle
                        content='Card'
                    />
                    {cardsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}

                    <NavTitle
                        content='Elements'
                    />
                    {elementsComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}
                    <NavTitle
                        content='Forms'
                    />
                    {formComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}

                    <NavTitle
                        content='Modals'
                    />
                    {modalomponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}

                    <NavTitle
                        content='Next'
                    />
                    {nextComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}

                    <NavTitle
                        content='Next'
                    />
                    {typographyComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                        />
                    ))}


                </Nav>
                <main>{children}</main>
            </MainContainer>
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