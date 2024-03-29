import { ReactNode, useState } from "react";
import { useTheme } from "styled-components";
import { Accordion } from "../components/Elements/Accordion";
import { Divider } from "../components/Elements/Divider";
import { Drawer } from "../components/Elements/Drawer";
import { DrawerButton } from "../components/Elements/DrawerButton";
import { Footer } from "../components/Elements/Footer";
import { FooterAttach } from "../components/Elements/Footer/FooterAttach";
import { FooterFirstSection } from "../components/Elements/Footer/FooterFirstSection";
import { FooterFourthSection } from "../components/Elements/Footer/FooterFourthSection";
import { FooterLink } from "../components/Elements/Footer/FooterLink";
import { FooterSecondSection } from "../components/Elements/Footer/FooterSecondSection";
import { FooterText } from "../components/Elements/Footer/FooterText";
import { FooterThirdSection } from "../components/Elements/Footer/FooterThirdSection";
import { FooterTitle } from "../components/Elements/Footer/FooterTitle";
import { Header } from "../components/Elements/Header";
import { HeaderLink } from "../components/Elements/Header/HeaderLink";
import { HeaderLinksContainer } from "../components/Elements/Header/HeaderLinksContainer";
import { HeaderLogoContainer } from "../components/Elements/Header/HeaderLogoContainer";
import { Logo } from "../components/Elements/Logo";
import { Nav } from "../components/Elements/Nav";
import { NavLink } from "../components/Elements/Nav/NavLink";
import { NavTitle } from "../components/Elements/Nav/NavTitle";
import { SocialIcons } from "../components/Elements/SocialIcons";
import { NextImage } from "../components/Next/NextImage";
import NextProgressComponent from "../components/Next/NextProgress";
import { Text } from '../components/Typography/Text'
import {
    animationComponentsLinkList,
    cardsLinkList,
    elementsComponentsLinkList,
    formComponentsLinkList,
    modalomponentsLinkList,
    nextComponentsLinkList,
    typographyComponentsLinkList
} from '../data/componentsListLinks';
import { Container, CountryCreditContainer, MainContainer } from "./styles";

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
            <Header
                style={{
                    backgroundColor: theme.colors.black100
                }}
            >
                {isDrawerOpen &&
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        direction='left'
                    >
                        <NavTitle
                            style={{
                                color: theme.colors.primary_dark,
                            }}
                            content='Introduction'
                        />

                        <NavLink
                            content='Introduction'
                            url='/#introduction'
                            style={{
                                color: theme.colors.text
                            }}
                        />
                        <Divider
                            style={{ background: theme.colors.silver100 }}
                        />

                        <NavTitle
                            style={{
                                color: theme.colors.primary_dark,
                            }}
                            content='Getting Started'
                        />

                        <NavLink
                            content='Getting Started'
                            url='/#Getting Started'
                            style={{
                                color: theme.colors.text
                            }}
                        />

                        <Divider
                            style={{ background: theme.colors.silver100 }}
                        />
                        <NavTitle
                            style={{
                                color: theme.colors.primary_dark,
                            }}
                            content='Components'
                        />
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                                onClick={toggleDrawer}
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
                        size='small'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content="Introduction"
                        url='/#introduction'
                    />
                    <HeaderLink
                        content="Getting Started"
                        url='/#Getting Started'
                    />
                    <HeaderLink
                        content="Make a donation"
                        url='https://www.buymeacoffee.com/pablosilvadev'
                    />
                </HeaderLinksContainer>

            </Header>
            <MainContainer>
                <Nav
                    style={{
                        backgroundColor: theme.colors.element_base
                    }}
                >
                    <NavTitle
                        style={{
                            color: theme.colors.primary_dark,
                        }}
                        content='Introduction'
                    />

                    <NavLink
                        content='Introduction'
                        url='/#introduction'
                        style={{
                            color: theme.colors.text
                        }}
                    />
                    <Divider
                        style={{ background: theme.colors.silver100 }}
                    />

                    <NavTitle
                        style={{
                            color: theme.colors.primary_dark,
                        }}
                        content='Getting Started'
                    />

                    <NavLink
                        content='Getting Started'
                        url='/#gettingstarted'
                        style={{
                            color: theme.colors.text
                        }}
                    />

                    <Divider
                        style={{ background: theme.colors.silver100 }}
                    />
                    <NavTitle
                        style={{
                            color: theme.colors.primary_dark,
                        }}
                        content='Components'
                    />

                    <Accordion
                        title="Animations"
                    >
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
                    </Accordion >
                    <Accordion
                        title="Cards"
                    >
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
                    </Accordion >

                    <Accordion
                        title="Elements"
                    >
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
                    </Accordion >
                    <Accordion
                        title="Forms"
                    >
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
                    </Accordion >

                    <Accordion
                        title="Modals"
                    >
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
                    </Accordion >

                    <Accordion
                        title="Next"
                    >
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
                    </Accordion >
                    <Accordion
                        title="Typography"
                    >
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
                    </Accordion >
                </Nav>
                <main>{children}</main>
            </MainContainer>
            <Footer
                style={{
                    backgroundColor: theme.colors.black100,
                }}
            >
                <FooterFirstSection>
                    <FooterTitle
                        content='Introduction'
                    />
                    <FooterLink
                        content='Access the introduction'
                        url='/#introduction'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='License'
                    />
                    <FooterLink
                        content='Access our license here'
                        url='/'
                    />
                </FooterSecondSection>
                <FooterThirdSection>
                    <FooterTitle
                        content='Sponsor'
                    />
                    <FooterLink
                        content='If this project helps you, consider a donation'
                        url='https://www.buymeacoffee.com/pablosilvadev'
                    />
                </FooterThirdSection>
                <FooterFourthSection>
                    <FooterTitle
                        content='Contact'
                    />
                    <SocialIcons
                        linkedinUrl="https://www.linkedin.com/in/pablo-silva-76b521156/"
                        githubUrl="https://github.com/pablolucio97"
                        instagramUrl="https://www.instagram.com/pablosilva.dev/"
                        iconsStyle={{ color: '#fff' }}
                        iconsSize='small'
                    />
                    <CountryCreditContainer>
                        <FooterText
                            content="Made in Brazil"
                        />
                        <NextImage
                            height={16}
                            width={24}
                            imgUrl='/brazil_flag.jpg'
                        />
                    </CountryCreditContainer>
                </FooterFourthSection>
            </Footer >
            <FooterAttach className="footerAttach">
                <Divider/>
                <Text
                    content="PabloSilvaDev - © Copyright 2022"
                />
            </FooterAttach>
        </Container>

    )
}
