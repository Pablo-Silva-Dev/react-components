import { RevealFlip as RevealFlipAnimation } from '../components/Animations/RevealFlip'
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

export default function RevealFlip() {

    const props = {
        children: 'Description: Element wrapped by RevealFlip. Type: ReacNode. Required.',
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
                        content='RevealFlip'
                    />
                    <Text
                        content='Used to display RevealFlip animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <RevealFlipAnimation
                        right
                    >
                        <h3>It is a children.</h3>
                    </RevealFlipAnimation>
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