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
import { Container, CountryCreditContainer, MainContainer } from "./styles";
import { useTheme } from "styled-components";
import { SocialIcons } from "../components/Elements/SocialIcons";
import { HeaderLinksContainer } from "../components/Elements/Header/HeaderLinksContainer";
import { HeaderLink } from "../components/Elements/Header/HeaderLink";
import { Divider } from "../components/Elements/Divider";
import { FooterText } from "../components/Elements/Footer/FooterText";
import { NextImage } from "../components/Next/NextImage";

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
                    backgroundColor: theme.colors.black
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
                            style={{ background: theme.colors.silver }}
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
                            style={{ background: theme.colors.silver }}
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
                        style={{ background: theme.colors.silver }}
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
                        style={{ background: theme.colors.silver }}
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
            <Footer
                style={{
                    backgroundColor: theme.colors.black
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
        </Container>

    )
}