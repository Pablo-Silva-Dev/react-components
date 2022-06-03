import { DisplayCode } from '../components/Display/DisplayCode';
import { SubTitle } from '../components/Typography/SubTitle';
import { Text as TextComponent } from "../components/Typography/Text";
import { Title } from '../components/Typography/Title';
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Text() {

    const props = {
        content: 'Description: Text text. Type: String. Required.',
        style: 'Description: Style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Text'
                    />
                    <TextComponent
                        content='Used to display a Text. It is a paragraph element.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TextComponent
                        content='I am a Text'
                    />
                </PreviewContainer>

                <PropsContainer>
                    <TextComponent
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
                            <TextComponent
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Text
                        content='I am a Text'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}