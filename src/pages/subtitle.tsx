import { DisplayCode } from '../components/Display/DisplayCode';
import { SubTitle as SubTitleComponent } from '../components/Typography/SubTitle'
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function SubTitle() {

    const props = {
        content: 'Description: Subtitle text. Type: String. Required.',
        style: 'Description: Style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SubTitle'
                    />
                    <Text
                        content='Used to display a subtitle. It is a h3 element.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SubTitleComponent
                        content='I am a subtitle'
                    />
                </PreviewContainer>

                <PropsContainer>
                    <SubTitleComponent
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitleComponent
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
                    <SubTitleComponent
                        content='I am a subtitle'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}