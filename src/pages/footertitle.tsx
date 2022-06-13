import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { FooterTitle as FooterTitleComponent } from '../components/Elements/Footer/FooterTitle'
import { SubTitle } from "../components/Typography/SubTitle";
import { Title } from "../components/Typography/Title";
import { Text } from "../components/Typography/Text";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function FooterTitle() {

    const props = {
        content: 'Description: Title Title to display. Type: String. Required.',
        style: 'Description: FooterTitle style. Type: CSS Properties.',
        className: 'Description: FooterTitle className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='FooterTitle'
                    />
                    <Text
                        content='Used to display titles for footer sections.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterTitleComponent
                        content='Your content here'
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
                    <FooterTitle
                       content='Your content here'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}