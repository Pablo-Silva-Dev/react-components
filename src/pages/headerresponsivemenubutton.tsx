import { useState } from 'react';
import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import {
    HeaderResponsiveMenuButton as HeaderResponsiveMenuButtonComponent
} from '../components/Elements/Header/HeaderResponsiveMenuButton'
import { ResponsiveMenu } from '../components/Elements/ResponsiveMenu';
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function HeaderResponsiveMenuButton() {

    const props = {
        toggleResponsiveMenu: 'Description: Function to trigger the ResponsiveMenu component. Type: Funcion. Required.',
        containerStyle: 'Description: Container style. Type: CSS Properties.',
        containerClassName: 'Description: Container className. Type: String.',
        iconStyle: 'Description: Icon style. Type: CSS Properties.',
        iconClassName: 'Description: Icon className. Type: String.'
    }


    const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

    function toggleResponsiveMenu() {
        setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
        console.log(isResponsiveMenuOpen)
    }

    return (
        <Container>
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
                    toggleResponsiveMenu={toggleResponsiveMenu}
                />
            }
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='HeaderResponsiveMenuButton'
                    />
                    <Text
                        content='Used to trigger the responsive menu component on small devices. This component does not is displayed on devices with width superior to 720px by default, resize your window to see it.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderResponsiveMenuButtonComponent
                        toggleResponsiveMenu={toggleResponsiveMenu}
                    />
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
                    <HeaderResponsiveMenuButtonComponent
                        toggleResponsiveMenu={toggleResponsiveMenu}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}