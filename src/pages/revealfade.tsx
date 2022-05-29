import { RevealFade as RevealFadeAnimation } from '../components/Animations/RevealFade'
import { DisplayCode } from '../components/Display/DisplayCode';
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
        children: 'Description: Element wrapped by RevealFade. Type: ReacNode. Required.',
        top: 'Description: Reveals content from top.',
        bottom: 'Description: Reveals content from bottom.',
        left: 'Description: Reveals content from left.',
        right: 'Description: Reveals content from right.',
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
                        <h3>It is a children.</h3>
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
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <RevealFadeAnimation
                    top>
                    <h3>It is a children.</h3>
                </RevealFadeAnimation>"
                />
            </ComponentContainer>
        </Container>
    )
}