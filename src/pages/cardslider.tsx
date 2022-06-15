import { DisplayCode } from '../components/Display/DisplayCode';
import { CardSlider as CardSliderComponent } from '../components/Elements/CardSlider'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function CardSlider() {

    const props = {
        children: 'Description: React elements to display, in this case, any card element is recommended. Type: ReactNode. Required.',
        autoPlay: 'Description: Actives autoplay if true. Type: Boolean.',
        infiniteLoop: 'Description: Actives infinite loop if true. Type: Boolean.',
        showStatus: 'Description: Display the image array length and the current index if true. Type: Boolean.',
        showIndicators: 'Description: Display dots indicator if true. Type: Boolean.',
        interval: 'Description: The number in milliseconds to wait for leap for next image. Default: 2400.',
    }


    const profiles = [
        {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            name: 'Samantha Lee',
            role: 'Designer',
            ratings: 5,
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
            name: 'Alicia',
            role: 'Full-stack developer',
            ratings: 4,
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            name: 'Alex',
            role: 'Front-end developer',
            ratings: 5,
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },

    ]


    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='CardSlider'
                    />
                    <Text
                        content='A carousel with controls and options for cards.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <CardSliderComponent
                  
                    >
                        {profiles.map(profile => (
                            <TestimonialCard
                                key={profile.name}
                                personName={profile.name}
                                personPhotoUrl={profile.url}
                                testimonial={profile.testimonial}
                                personRole={profile.role}
                                ratings={profile.ratings}
                            />
                        ))}
                    </CardSliderComponent >
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
       {/*          <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const profiles = [
                        {
                            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                            name: 'Samantha Lee',
                            role: 'Designer',
                            ratings: 5,
                            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
                            name: 'Alicia',
                            role: 'Full-stack developer',
                            ratings: 4,
                            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                            name: 'Alex',
                            role: 'Front-end developer',
                            ratings: 5,
                            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                        },
                
                    ]"
                /> */}
      {/*           <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <CardSliderComponent
                       infiniteLoop
                       autoPlay
                       showStatus={false}
                       showIndicators={false}
                     >
                    {profiles.map(profile => (
                        <TestimonialCard
                            key={profile.name}
                            personName={profile.name}
                            personPhotoUrl={profile.url}
                            testimonial={profile.testimonial}
                            personRole={profile.role}
                            ratings={profile.ratings}
                        />
                    ))}
                </CardSliderComponent >
                    "
                    hideTitle
                /> */}
            </ComponentContainer>
        </Container>
    )
}