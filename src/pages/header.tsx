import { useState } from 'react';
import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Drawer } from '../components/Elements/Drawer';
import { Header as HeaderComponent } from '../components/Elements/Header'
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { NavLink } from '../components/Elements/Nav/NavLink';
import { NavTitle } from '../components/Elements/Nav/NavTitle';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    animationComponentsLinkList,
    cardsLinkList,
    elementsComponentsLinkList,
    formComponentsLinkList,
    modalomponentsLinkList,
    nextComponentsLinkList,
    typographyComponentsLinkList
} from '../data/componentsListLinks';
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";
import { Logo } from '../components/Elements/Logo';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';

export default function Header() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Header style. Type: CSS Properties.',
        className: 'Description: Header className. Type: String.'
    }



    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Header'
                    />
                    <Text
                        content='A Header wrapper used to mount your Header. It is auto responsible by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderComponent>
                        <HeaderLogoContainer>
                            <Logo
                                imageUrl='/logo.png'
                                size='medium'
                            />
                        </HeaderLogoContainer>
                        <HeaderLinksContainer>
                            <HeaderLink
                                content='Your link'
                                url='/'
                            />
                            <HeaderLink
                                content='Your link'
                                url='/'
                            />
                            <HeaderLink
                                content='Your link'
                                url='/'
                            />
                        </HeaderLinksContainer>
                    </HeaderComponent>
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Header
                        style={{
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                        <p>Your content comes here</p>
                    </Header>"
                />
            </ComponentContainer>
        </Container>
    )
}