import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { ResponsiveMenu as ResponsiveMenuComponent } from '../components/Elements/ResponsiveMenu'
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

export default function ResponsiveMenu() {

    const props = {
        toggleResponsiveMenu: 'Description: Function to open/close the ResponsiveMenu. Type: Function. Required.',
        children: 'Description: React elements to display. Type: ReactNode.',
        direction: 'Description: Component reveals position. Type: "top" | "left" | "right". Default: "top".',
        style: 'Description: Container style. Type: CSS Properties.',
        className: 'Description: Container className. Type: String.',
        stepItemStyle: 'Description: Step Item style. Type: CSS Properties.',
        stepItemClassName: 'Description: Step Item className. Type: String.',
        menuStyle: 'Description: Menu style. Type: CSS Properties.',
        menuClassName: 'Description: Menu className. Type: String.',
        buttonStyle: 'Description: Button style. Type: CSS Properties.',
        buttonClassName: 'Description: Button className. Type: String.',
    }

  

    const [responsiveMenu, setResponsiveMenu] = useState(true)

    function toggleResponsiveMenu() {
        setResponsiveMenu(!responsiveMenu)
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ResponsiveMenu'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    {responsiveMenu &&
                        <ResponsiveMenuComponent
                            toggleResponsiveMenu={toggleResponsiveMenu}
                            direction='top'
                        >
                            <p>I am a ResponsiveMenu children.</p>
                        </ResponsiveMenuComponent>
                    }
                    <PrimaryButton
                        onClick={toggleResponsiveMenu}
                        title='Toggle Responsive Menu'
                        size='large'
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
                    {responsiveMenu &&
                        <ResponsiveMenuComponent
                            toggleResponsiveMenu={toggleResponsiveMenu}
                            direction='top'
                        >
                            <p>I am a ResponsiveMenu children.</p>
                        </ResponsiveMenuComponent>
                    }"
                />
            </ComponentContainer>
        </Container>
    )
}