import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Divider } from '../components/Elements/Divider';
import { Text } from "../components/Typography/Text";
import { FooterAttach } from '../components/Elements/Footer/FooterAttach';
import { SubTitle } from "../components/Typography/SubTitle";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Footer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Footer style. Type: CSS Properties.',
        className: 'Description: Footer className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='FooterAttach'
                    />
                    <Text
                        content='It is a component that can be used as a footer attachment, should be used after the footer tag closing, as the last component of the page. Useful to display data about the developer at page end.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterAttach>
                        <Divider />
                        <Text
                            content='PabloSilvaDev - 2022 - WebDeveloper'
                            style={{
                                fontSize: 10
                            }}
                        />
                    </FooterAttach>
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
                    children="import { Divider } from '../components/Elements/Divider';"
                    />
                <DisplayCode
                    //eslint-disable-next-line
                    children="import { Divider } from '../components/Elements/Divider';"
                    hideTitle
                    />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <FooterAttach>
                    <Divider />
                    <Text
                        content='PabloSilvaDev - 2022 - WebDeveloper'
                        style={{
                            fontSize: 10
                        }}
                        />
                        </FooterAttach>               
                        "
                        hideTitle
                />
            </ComponentContainer>
        </Container >
    )
}