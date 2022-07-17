import { DisplayCode } from '../components/Display/DisplayCode';
import { NextLink as NextLinkComponent } from '../components/Next/NextLink'
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

export default function NextLink() {

    const props = {
        url: 'Description: The Link address. Type: String. Required.',
        title: 'Description: The Link text to display. Type: String. Required.',
        openInSameWindow: 'Description: Define if the link should be open in the same window. Default: False.',
        onClick: 'An optional function can be invoked at click on the link. Type: Function.',
        style: 'Description: Link style. Type: CSSProperties.',
        className: 'Description: Link className. Type: String.',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='NextLink'
                    />
                    <Text
                        content='Used to use Links in a NextJS project.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <NextLinkComponent
                        title='See docs.'
                        url='https://nextjs.org/docs'
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
                    <NextLinkComponent
                        title='See docs.'
                        url='https://nextjs.org/docs'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}
