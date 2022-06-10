import { DisplayCode } from '../components/Display/DisplayCode';
import { NewsletterCard as NewsletterCardComponent } from '../components/Cards/NewsletterCard'
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

export default function Avatar() {

    const props = {
        title: 'Description: Newsletter title. Type: String. Required.',
        subTitle: 'Description: Newsletter subtitle. Type: String.',
        emailPlaceholder: 'Description: Placeholder for email input. Type: String. Required',
        namePlaceholder: 'Description: Placeholder for name input. Type: String.',
        submit: 'Description: Function to submit newsletter form. Type: Async Function. Required.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        newsletterTitleStyle: 'Description: NewsletterTitle style. Type: CSS Properties.',
        newsletterTitleClassName: 'Description: NewsletterTitle className. Type: String.',
        newsletterDescriptionStyle: 'Description: NewsletterDescription style. Type: CSS Properties.',
        newsletterDescriptionClassName: 'Description: NewsletterDescription className. Type: String.',
        inputStyle: 'Description: Input style. Type: CSS Properties.',
        inputClassName: 'Description: Input className. Type: String.',
        buttonStyle: 'Description: Button style. Type: CSS Properties.',
        buttonClassName: 'Description: Button className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='NewsletterCard'
                    />
                    <Text
                        content='Used collect user contact data and send e-mails.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <NewsletterCardComponent
                        emailPlaceholder='your-email'
                        namePlaceholder='your-name'
                        submit={async () => { }}
                        title='Receive our newsletter'
                        subtitle='News every week'
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
                    <NewsletterCardComponent
                    emailPlaceholder='your-email'
                    namePlaceholder='your-name'
                    submit={async () => { }}
                    title='Receive our newsletter'
                    subtitle='News every week'
                    />
                "
                />
            </ComponentContainer>
        </Container>
    )
}