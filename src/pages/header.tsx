import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Header as HeaderComponent } from '../components/Elements/Header'
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

export default function Header() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Header style. Type: CSS Properties.',
        className: 'Description: Header className. Type: String.'
    }

    const theme = useTheme()

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
                    <HeaderComponent
                        style={{
                            backgroundColor: theme.colors.primary_light,
                        }}
                    >
                        <p>Your content comes here</p>
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
                    <HeaderComponent
                        style={{
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                        <p>Your content comes here</p>
                    </HeaderComponent>"
                />
            </ComponentContainer>
        </Container>
    )
}