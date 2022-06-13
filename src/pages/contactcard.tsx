import { DisplayCode } from '../components/Display/DisplayCode';
import { ContactCard as ContactCardComponent } from '../components/Cards/ContactCard'
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
import { MdEmail } from 'react-icons/md';

export default function ContactCard() {

    const props = {
        email: 'Description: The most common contact info. Email. Type: String. Required.',
        cardTitle: 'Description: Card title. Type: String.',
        phone: 'Description: Phone. Type: String.',
        address: 'Description: Address. Type: String.',
        emailIcon: 'Description: A space to render some Icon or SVG for email. Type: ReactNode.',
        phoneIcon: 'Description: A space to render some Icon or SVG for phone. Type: ReactNode.',
        addressIcon: 'Description: A space to render some Icon or SVG for address. Type: ReactNode.',
        contactMessage: 'Description: An additional text to render as contact message. Type: String.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        textStyle: 'Description: Text style. Type: CSS Properties.',
        textClassName: 'Description: Text className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
        children: 'Description: A space to render some Icon or SVG. Type: ReactNode.'
    }
    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ContactCard'
                    />
                    <Text
                        content='A complete contact card.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ContactCardComponent
                       email='johndoe@gmail.com'
                       cardTitle='John Doe'
                       emailIcon={<MdEmail/>}
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
                    <ContactCardComponent
                        email='johndoe@gmail.com'
                        cardTitle='John Doe'
                        emailIcon={<MdEmail/>}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}