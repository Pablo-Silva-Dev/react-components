import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { HeaderLink as HeaderLinkComponent } from '../components/Elements/Header/HeaderLink'
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

export default function HeaderLink() {

    const props = {
        content: 'Description: Link text to display. Type: String. Required.',
        url: 'Description: Path to redirect. Type: String. Required.',
        style: 'Description: HeaderLink style. Type: CSS Properties.',
        className: 'Description: HeaderLink className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='HeaderLink'
                    />
                    <Text
                        content='Used to display links on header.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderLinkComponent
                        content='Header Link'
                        url='/'
                        style={{
                            color: theme.colors.primary
                        }}
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
                    <HeaderLinkComponent
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