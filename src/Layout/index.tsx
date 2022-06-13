import { ReactNode, useState } from "react";
import { Drawer } from "../components/Elements/Drawer";
import { Footer } from "../components/Elements/Footer";
import { FooterFirstSection } from "../components/Elements/Footer/FooterFirstSection";
import { FooterFourthSection } from "../components/Elements/Footer/FooterFourthSection";
import { FooterLink } from "../components/Elements/Footer/FooterLink";
import { FooterSecondSection } from "../components/Elements/Footer/FooterSecondSection";
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
import { useTheme } from "styled-components";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const theme = useTheme()

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
                            style={{
                                color: theme.colors.title
                            }}
                            content='Animations'
                        />
                        {animationComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}
                        <NavTitle
                            content='Card'
                            style={{
                                color: theme.colors.text
                            }}
                        />
                        {cardsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}

                        <NavTitle
                            style={{
                                color: theme.colors.text
                            }}
                            content='Elements'
                        />
                        {elementsComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}
                        <NavTitle
                            style={{
                                color: theme.colors.text
                            }}
                            content='Forms'
                        />
                        {formComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}

                        <NavTitle
                            style={{
                                color: theme.colors.text
                            }}
                            content='Modals'
                        />
                        {modalomponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}

                        <NavTitle
                            style={{
                                color: theme.colors.text
                            }}
                            content='Next'
                        />
                        {nextComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
                            />
                        ))}
                        <NavTitle
                            style={{
                                color: theme.colors.text
                            }}
                            content='Typography'
                        />
                        {typographyComponentsLinkList.map(link => (
                            <NavLink
                                key={link.content}
                                content={link.content}
                                url={link.url}
                                style={{
                                    color: theme.colors.text
                                }}
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
                <Nav
                    style={{
                        backgroundColor: theme.colors.element_base
                    }}
                >
                    <NavTitle
                        style={{
                            color: theme.colors.title
                        }}
                        content='Animations'
                    />
                    {animationComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}
                    <NavTitle
                        content='Card'
                        style={{
                            color: theme.colors.text
                        }}
                    />
                    {cardsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}

                    <NavTitle
                        style={{
                            color: theme.colors.text
                        }}
                        content='Elements'
                    />
                    {elementsComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}
                    <NavTitle
                        style={{
                            color: theme.colors.text
                        }}
                        content='Forms'
                    />
                    {formComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}

                    <NavTitle
                        style={{
                            color: theme.colors.text
                        }}
                        content='Modals'
                    />
                    {modalomponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}

                    <NavTitle
                        style={{
                            color: theme.colors.text
                        }}
                        content='Next'
                    />
                    {nextComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    ))}

                    <NavTitle
                        style={{
                            color: theme.colors.text
                        }}
                        content='Typography'
                    />
                    {typographyComponentsLinkList.map(link => (
                        <NavLink
                            key={link.content}
                            content={link.content}
                            url={link.url}
                            style={{
                                color: theme.colors.text
                            }}
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
            </Footer >
        </Container>

    )
}