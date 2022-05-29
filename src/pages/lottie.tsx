import { LottieAnimation } from '../components/Animations/Lottie'
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
import { DisplayCode } from '../components/Display/DisplayCode';

export default function Lottie() {

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
                        content='Lottie'
                    />
                    <Text
                        content='Used to display Lottie animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <LottieAnimation
                        animation={animation}
                        width={300}
                        height={300}
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
                    <LottieAnimation
                        animation={animation}
                        width={300}
                        height={300}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}