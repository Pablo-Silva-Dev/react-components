import { RevealFade as RevealFadeAnimation } from '../components/Animations/RevealFade'
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

export default function RevealFade() {

    const props = {
        top: 'Description: Reveals content from top.',
        bottom: 'Description: Reveals content from bottom.',
        left: 'Description: Reveals content from left.',
        right: 'Description: Reveals content from right.',
        style: 'Description: Animation style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='RevealFade'
                    />
                    <Text
                        content='Used to display RevealFade animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <RevealFadeAnimation
                        top
                    >
                        <p>It is a children.</p>
                    </RevealFadeAnimation>
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
            </ComponentContainer>
        </Container>
    )
}