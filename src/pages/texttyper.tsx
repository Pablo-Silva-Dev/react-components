import { TextTyper as TextTyperAnimation } from '../components/Animations/TextTyper'
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

export default function TextTyper() {

    const props = {
        textList: 'Description: An array containing texts to display. Is suported until 8 texts. Type: string[]. Required.',
        textDelay: 'Description: Text delay in MS. Type: Number.',
        wrapper: 'Description: HTML element to render the animation. Type: "p" | "h1" |"h2" | "h3" | "h4" | "h5" | "h6".',
        repeatTimes: 'Description: Number of times to repeat the whole animation. Type: Number.',
        showsCursor: 'Description: If the cursour should be visible. Type: Boolean. Default: true.',
        className: 'Description: ClassName. Type: String.'
    }

    const list = [
        'one', 'two', 'three', 'four', 'five', 'six'
    ]

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
                        textList={list}
                        textDelay={100}
                        wrapper='h2'
                        className=''
                        showsCursor

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
                    <TextTyperAnimation
                    textList={list}
                    textDelay={100}
                    wrapper='h2'
                    className=''
                    showsCursor
                />"
                />
            </ComponentContainer>
        </Container>
    )
}