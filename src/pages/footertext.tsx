import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { FooterText as FooterTextComponent } from '../components/Elements/Footer/FooterText'
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

export default function FooterText() {

    const props = {
        content: 'Description: Text text to display. Type: String. Required.',
        url: 'Description: Path to redirect. Type: String. Required.',
        style: 'Description: FooterText style. Type: CSS Properties.',
        className: 'Description: FooterText className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='FooterText'
                    />
                    <Text
                        content='Used to display texts on Footer.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterTextComponent
                       content='Your content here'
                    />
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                    
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
                    <FooterTextComponent
                       content='Your content here'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}