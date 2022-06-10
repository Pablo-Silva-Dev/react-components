import { DisplayCode } from '../components/Display/DisplayCode';
import { StepProgress as StepProgressComponent } from '../components/Elements/StepProgress'
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

export default function StepProgress() {

    const props = {
        currentIndex: 'Description: Active step index used to control the component. Type: Number. Required.',
        steps: 'Description: An array containing all processes string. Type: string[]. Required.',
        containerStyle: 'Description: Container style. Type: CSS Properties.',
        containerClassName: 'Description: Container className. Type: String.',
        stepItemStyle: 'Description: Step Item style. Type: CSS Properties.',
        stepItemClassName: 'Description: Step Item className. Type: String.',
        lineStyle: 'Description: Line style. Type: CSS Properties.',
        lineClassName: 'Description: Line className. Type: String.',
        textStyle: 'Description: Text style. Type: CSS Properties.',
        textClassName: 'Description: Text className. Type: String.',
    }

    const steps = [
        'Approving payment', 'In transit', 'Finished'
    ]

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='StepProgress'
                    />
                    <Text
                        content='Used to display the current status of a process.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <StepProgressComponent
                        currentIndex={2}
                         steps={steps}
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
                    const steps = [
                        'Approving payment', 'In transit', 'Finished'
                    ]"
                    />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <StepProgressComponent
                    currentIndex={2}
                    steps={steps}
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}