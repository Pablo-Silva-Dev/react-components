import { CountUpAnimation } from '../components/Animations/CountUp'
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

export default function CountUp() {

    const props = {
        start: 'Description: Initial counter value. Type: Number. Required.',
        end: 'Description: Final counter value. Type: Number. Required.',
        duration: 'Description: A number between 1 and 5 that represents animation speed. Type: Number.',
        decimal: 'Description: "," or "." decimal separator. Type: String.',
        decimals: 'Description: Number of decimals after separator. Type: Number.',
        onEnd: 'Description: Function to be invoked at animation ending. Type: Function.',
        onStart: 'Description: Function to be invoked at animation starts. Type: Function.',
        prefix: 'Description: String to display before animation value . Type: Number.',
        suffix: 'Description: String to display after animation value. Type: Number.',
        style: 'Description: Animation style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='CountUp'
                    />
                    <Text
                        content='Used to display counting animation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <CountUpAnimation
                        end={99.99}
                        start={0}
                        duration={2}
                        decimal=','
                        decimals={2}
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