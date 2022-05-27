import { Loading as LoadingAnimation } from '../components/Animations/Loading'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import { ComponentContainer, Container, DescriptionContainer, PreviewContainer, PropsContainer } from "../styles";

export default function Loading() {

    const props = {
        start: 'Description: Animation size. Type: "small" | "medium" | "large".',
        type: 'Description: Animation type. Type: "bars" | "bubbles" | "balls" | "blank" | "cylon" | "spin" | "spokes" |"cubes" | "spinningBubbles".',

    }


    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Loading'
                    />
                    <Text
                        content='Used to display loading animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <LoadingAnimation
                        size='medium'
                        type='spinningBubbles'
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