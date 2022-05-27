import { TextTyper as TextTyperAnimation } from '../components/Animations/TextTyper'
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
import animation from '../../public/react_animation.json'

export default function TextTyper() {

    const props = {
        animation: 'Description: Animation size. Type: JSON object. Required.',
        width: 'Description: Animation width. Type: Number. Required.',
        height: 'Description: Animation height. Type: Number. Required.',
        autoplay: 'Description: Autoplay. Type: boolean.',
        loop: 'Description: Loop. Type: boolean.',
        style: 'Description: Animation style. Type: CSS Properties.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='TextTyper'
                    />
                    <Text
                        content='Used to display TextTyper animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TextTyperAnimation
                        firstText='It is the first text'
                        firstTextDelay={100}
                        secondText='It is the second text'
                        wrapper='h2'
                        repeat={1}
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
            </ComponentContainer>
        </Container>
    )
}