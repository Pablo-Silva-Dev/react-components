import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { FooterLink as FooterLinkComponent } from '../components/Elements/Footer/FooterLink'
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

export default function FooterLink() {

    const props = {
        content: 'Description: Link text to display. Type: String. Required.',
        url: 'Description: Path to redirect. Type: String. Required.',
        style: 'Description: FooterLink style. Type: CSS Properties.',
        className: 'Description: FooterLink className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='FooterLink'
                    />
                    <Text
                        content='Used to display links on Footer.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterLinkComponent
                        content='Footer Link'
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
                    <FooterLink
                        content='Footer Link'
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