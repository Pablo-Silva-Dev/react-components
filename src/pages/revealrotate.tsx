import { RevealRotate as RevealRotateAnimation } from '../components/Animations/RevealRotate'
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

export default function RevealRotate() {

    const props = {
        children: 'Description: Element wrapped by RevealRotate. Type: ReacNode. Required.',
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
                        content='RevealRotate'
                    />
                    <Text
                        content='Used to display RevealRotate animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <RevealRotateAnimation
                        left
                    >
                        <h3>It is a children.</h3>
                    </RevealRotateAnimation>
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