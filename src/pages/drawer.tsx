import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Drawer as DrawerComponent } from '../components/Elements/Drawer';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
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

export default function Drawer() {

    const props = {
        toggleDrawer: 'Description: Function to open/close the Drawer. Type: Function. Required.',
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

  

    const [Drawer, setDrawer] = useState(true)

    function toggleDrawer() {
        setDrawer(!Drawer)
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Drawer'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    {Drawer &&
                        <DrawerComponent
                            toggleDrawer={toggleDrawer}
                            direction='top'
                        >
                            <p>I am a Drawer children.</p>
                        </DrawerComponent>
                    }
                    <PrimaryButton
                        onClick={toggleDrawer}
                        title='Toggle Drawer'
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
                    {Drawer &&
                        <DrawerComponent
                            toggleDrawer={toggleDrawer}
                            direction='top'
                        >
                            <p>I am a Drawer children.</p>
                        </DrawerComponent>
                    }"
                />
            </ComponentContainer>
        </Container>
    )
}