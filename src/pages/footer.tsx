import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Footer as FooterComponent } from '../components/Elements/Footer'
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

export default function Footer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Footer style. Type: CSS Properties.',
        className: 'Description: Footer className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Footer'
                    />
                    <Text
                        content='A footer wrapper used to mount your footer. It is auto responsible by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterComponent
                        style={{
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                        <p>Your content comes here</p>
                    </FooterComponent>
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
                    <FooterComponent
                        style={{
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                        <p>Your content comes here</p>
                    </FooterComponent>"
                />
            </ComponentContainer>
        </Container>
    )
}