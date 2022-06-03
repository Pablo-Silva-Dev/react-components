import { DisplayCode } from '../components/Display/DisplayCode';
import { SubTitle } from '../components/Typography/SubTitle';
import { GradientText as GradientTextComponent } from "../components/Typography/GradientText";
import { Title } from '../components/Typography/Title';
import { Text } from '../components/Typography/Text';
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function GradientText() {

    const props = {
        content: 'Description: Text content. Type: String. Required.',
        initialColor: 'Description: Initial color to render gradient. Type: String. Required.',
        finalColor: 'Description: Final color to render gradient. Type: String. Required.',
        direction: 'Description: Gradient direction. Type: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top". Required.',
        style: 'Description: Style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    /* content: string;
    primaryColor: string;
    secondaryColor: string;
    direction: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
    style?: CSSProperties;
    className?: string */

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='GradientText'
                    />
                    <Text
                        content='Used to display a colorful gradient text.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <GradientTextComponent
                        direction='left-to-right'
                        initialColor='#0088ff'
                        finalColor='#4fd934'
                        content='This is the GradientText component'
                    />
                </PreviewContainer>
                <PropsContainer>
                    <Title
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <Title
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
                    <GradientTextComponent
                    direction='left-to-right'
                    initialColor='#0088ff'
                    finalColor='#4fd934'
                    content='This is the GradientText component'
                     />
                "
                />
            </ComponentContainer>
        </Container>
    )
}