import { DisplayCode } from '../components/Display/DisplayCode';
import { Divider as DividerComponent } from '../components/Elements/Divider'
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

export default function Divider() {

    const props = {
        style: 'Description: Image style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Divider'
                    />
                    <Text
                        content='Used to display a divider between two elements.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SubTitle content='Some item' />
                    <DividerComponent
                    />
                    <Text content='Another some item' />
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
                    children="<Divider/>"
                />
            </ComponentContainer>
        </Container>
    )
}