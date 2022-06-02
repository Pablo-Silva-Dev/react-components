import { DisplayCode } from '../components/Display/DisplayCode';
import { Title as TitleComponent } from '../components/Typography/Title'
import { Text } from "../components/Typography/Text";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Title() {

    const props = {
        content: 'Description: Title text. Type: String. Required.',
        style: 'Description: Style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <TitleComponent
                        content='Title'
                    />
                    <Text
                        content='Used to display a Title. It is a h1 element.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TitleComponent
                        content='I am a Title'
                    />
                </PreviewContainer>

                <PropsContainer>
                    <TitleComponent
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <TitleComponent
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
                    <Title
                        content='I am a Title'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}