import { DisplayCode } from '../components/Display/DisplayCode';
import { Timeline as TimelineComponent } from '../components/Elements/Timeline'
import { TimelineElement } from '../components/Elements/Timeline/TimelineElement'
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

export default function Timeline() {

    const props = {
        children: 'Description: One or more Timeline elements to display. Type: ReactNode. Required.',
        animated: 'Description: Define whether the Timeline should id animated. Default: False.',
        lineColor: 'Description: Sets the Timeline background line color. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Timeline'
                    />
                    <Text
                        content='Used to wrapper TimelineElement components and display a dynamic timeline.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TimelineComponent
                         animated
                    >
                        <TimelineElement
                            title='First child'
                            date='06/01/2022'
                            content='I am a TimelineElement component'
                        />
                    </TimelineComponent>
                     
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
                    <TimelineComponent
                    animated
                     >
                        <TimelineElement
                            title='First child'
                            date='06/01/2022'
                            content='I am a TimelineElement component'
                        />
                    </TimelineComponent>"
                />
            </ComponentContainer>
        </Container>
    )
}