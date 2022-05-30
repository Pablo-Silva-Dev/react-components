import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import {
    HeaderLinksContainer as HeaderLinksContainerComponent
} from '../components/Elements/Header/HeaderLinksContainer'
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
import { HeaderLink } from '../components/Elements/Header/HeaderLink';

export default function HeaderLinksContainer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: HeaderLinksContainer style. Type: CSS Properties.',
        className: 'Description: HeaderLinksContainer className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='HeaderLinksContainer'
                    />
                    <Text
                        content='Used to display links on header.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderLinksContainerComponent
                        style={{
                            backgroundColor: theme.colors.secondary,
                            width: '100%',
                            padding: 12
                        }}
                    >
                        <HeaderLink
                            content='Header Link'
                            url='/'
                            style={{
                                color: theme.colors.primary,
                            }}
                        />
                        <HeaderLink
                            content='Header Link'
                            url='/'
                            style={{
                                color: theme.colors.primary,
                            }}
                        />
                        <HeaderLink
                            content='Header Link'
                            url='/'
                            style={{
                                color: theme.colors.primary,
                            }}
                        />
                    </HeaderLinksContainerComponent >
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
                    <HeaderLinksContainerComponent
                        content='Header Link'
                        url='/'
                        style={{
                            color: theme.colors.primary
                        }}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}