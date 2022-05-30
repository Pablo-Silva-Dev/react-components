import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Nav as NavComponent } from '../components/Elements/Nav'
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

export default function Nav() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Nav style. Type: CSS Properties.',
        className: 'Description: Nav className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Nav'
                    />
                    <Text
                        content='A Nav wrapper used to mount your Nav component. It is auto responsible by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <NavComponent
                        style={{
                            display: 'flex',
                            width: '50%',
                            height: 400,
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                        <p>Your content comes here</p>
                    </NavComponent>
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
                    <NavComponent
                        style={{
                            display: 'flex',
                            width: '50%',
                            height: 400,
                            backgroundColor: theme.colors.primary_light
                        }}
                    >
                    <p>Your content comes here</p>
                </NavComponent>"
                />
            </ComponentContainer>
        </Container>
    )
}