import { DisplayCode } from '../components/Display/DisplayCode';
import { CollapsibleInfo as CollapsibleInfoComponent } from '../components/Elements/CollapsibleInfo'
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

export default function CollapsibleInfo() {

    const props = {
        title: 'Description: Title for CollapsibleInfo. Type: String. Required.',
        content: 'Description: Hidden content to be revealed. Type: String. Required.',
        transitionTime: 'Description: Time in ms to open the content. Type: Number. Default: 200.',
        contentStyle: 'Description:  Content style. Type: CSS Properties.',
        contentClassName: 'Description: Content className. Type: String.',
        contentContainerStyle: 'Description:  ContentContainer style. Type: CSS Properties.',
        contentContainerClassName: 'Description: ContentContainer className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        openedClassName: 'Description: ClassName to title when collapsible is open. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='CollapsibleInfo'
                    />
                    <Text
                        content="Often used on FAQ's."
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <CollapsibleInfoComponent
                        content='Your content here'
                        title='Title content here'
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
                    <CollapsibleInfo
                        content='Your content here'
                        title='Title content here'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}