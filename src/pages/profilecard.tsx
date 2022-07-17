import { ProfileCard as ProfileCardComponent } from '../components/Cards/ProfileCard';
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

export default function ProfileCard() {

    const props = {
        title: 'Description: Profile title. Type: String. Required.',
        imgUrl: 'Description: Profile image url. Type: String. Required.',
        bio: 'Description: Profile bio url. Type: String.',
        instagramUrl: 'Description: Profile Instagram url. Type: String.',
        twitterUrl: 'Description: Profile Twitter url. Type: String.',
        facebookUrl: 'Description: Profile Facebook url. Type: String.',
        githubUrl: 'Description: Profile GitHub url. Type: String.',
        linkedinUrl: 'Description: Profile Linkedin url. Type: String.',
        youtubeUrl: 'Description: Profile YouTube url. Type: String.',
        bgColor: 'Description: Card background color. Type: String.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        bioclassName: 'Description: Bio text className. Type: String.',
        bioStyle: 'Description: Bio text style. Type: CSS Properties.',
        iconsStyle: 'Description: Icons style. Type: CSS Properties.',
        iconsClassName: 'Description: Icons className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
        children: 'Description: A space to render additional content. Type: ReactNode.'
    }

    const profile = {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        title: 'Samantha Lee',
        bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ProfileCard'
                    />
                    <Text
                        content='A complete profile card.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ProfileCardComponent
                        imgUrl={profile.url}
                        title={profile.title}
                        bio={profile.bio}
                        instagramUrl='/'
                        facebookUrl='/'
                        linkedinUrl='/'
                        youtubeUrl='/'
                        bgColor='#ffee70'
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
                    <ProfileCardComponent
                        imgUrl={profile.url}
                        title={profile.title}
                        bio={profile.bio}
                        instagramUrl='/'
                        facebookUrl='/'
                        linkedinUrl='/'
                        youtubeUrl='/'
                        bgColor='#ffee70'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}
