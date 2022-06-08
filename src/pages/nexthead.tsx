import { DisplayCode } from '../components/Display/DisplayCode';
import { NextHead as NextHeadComponent } from '../components/Next/NextHead'
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

export default function NextHead() {

    const props = {
        title: 'Description: String to title your page. Type: String. Required.',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='NextHead'
                    />
                    <Text
                        content='Used to set your page title and use the same string as keyword for your website.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <NextHeadComponent
                      title='Your Page Title'
                    />
                    <p>Your Page Title</p>
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
                    <NextHeadComponent
                      title='Your Page Title'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}