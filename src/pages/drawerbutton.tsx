import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Drawer } from '../components/Elements/Drawer';
import {
     DrawerButton as DrawerButtonComponent
} from '../components/Elements/DrawerButton';
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

export default function HeaderDrawerButton() {

    const props = {
        toggleDrawer: 'Description: Function to trigger the Drawer component. Type: Funcion. Required.',
        containerStyle: 'Description: Container style. Type: CSS Properties.',
        containerClassName: 'Description: Container className. Type: String.',
        iconStyle: 'Description: Icon style. Type: CSS Properties.',
        iconClassName: 'Description: Icon className. Type: String.'
    }


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <Container>
            {isDrawerOpen &&
                <Drawer
                    direction='top'
                    toggleDrawer={toggleDrawer}
                />
            }
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='DrawerButton'
                    />
                    <Text
                        content='Used to trigger the responsive menu component on small devices. This component does not is displayed on devices with width superior to 720px by default, resize your window to see it.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <DrawerButtonComponent
                        toggleDrawer={toggleDrawer}
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
                    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

                    function toggleDrawer() {
                        setIsDrawerOpen(!isDrawerOpen)
                    }
                    <DrawerButton
                        toggleDrawer={toggleDrawer}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}