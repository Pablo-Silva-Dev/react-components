import { TestimonialCard as TestimonialCardComponent } from '../components/Cards/TestimonialCard';
import { DisplayCode } from '../components/Display/DisplayCode';
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

export default function TestimonialCard() {

    const props = {
        personName: 'Description: Person name. Type: String. Required.',
        imgUrl: 'Description: Person image url. Type: String. Required.',
        testimonial: 'Description: The person commentary content. Type: String. Required.',
        personRole: 'Description: Person role. Type: String. ',
        ratings: 'Description: A number to represent the number of stars to represent the testimonial review average. Type: Some value between 1 and 5, number.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        testimonialTextStyle: 'Description: Testimonial text style. Type: CSS Properties.',
        testimonialTextClassName: 'Description: Testimonial text className. Type: String.',
        roleTextStyle: 'Description: Role text style. Type: CSS Properties.',
        roleTextClassName: 'Description: Role text className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
    }

    const profile = {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        name: 'Samantha Lee',
        role: 'Designer',
        ratings: 4,
        testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='TestimonialCard'
                    />
                    <Text
                        content='An elegant card containing a commentary of a person and stars ratings.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TestimonialCardComponent
                        personName={profile.name}
                        ratings={profile.ratings}
                        personPhotoUrl={profile.url}
                        testimonial={profile.testimonial}
                        personRole={profile.role}
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
                    <TestimonialCardComponent
                        personName={profile.name}
                        ratings={profile.ratings}
                        personPhotoUrl={profile.url}
                        testimonial={profile.testimonial}
                        personRole={profile.role}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}