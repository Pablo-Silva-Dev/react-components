import { DisplayCode } from '../components/Display/DisplayCode';
import { SocialIcons as SocialIconsComponent } from '../components/Elements/SocialIcons';
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

export default function SocialIcons() {

    const props = {
        facebookUrl: 'Description: Facebook profile url. Type: String.',
        githubUrl: 'Description: GitHub profile url. Type: String.',
        instagramUrl: 'Description: Instagram profile url. Type: String.',
        twitterUrl: 'Description: Twitter profile url. Type: String.',
        youtubeUrl: 'Description: YouTube channel url. Type: String.',
        linkedinUrl: 'Description: Linkedin profile url. Type: String.',
        iconsSize: 'Description: Icons size. Type: "tiny" | "small" | "medium" | "large". Default: "medium".',
        iconsStyle: 'Description: Icons style. Type: CSS Properties.',
        iconsClassName: 'Description: Icons className. Type: String.',
        containerStyle: 'Description: Container style. Type: CSS Properties.',
        containerClassName: 'Description: Container className. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SocialIcons'
                    />
                    <Text
                        content='Used to display a collection of icons for main social networks.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SocialIconsComponent
                        facebookUrl='/'
                        githubUrl='/'
                        instagramUrl='/'
                        linkedinUrl='/'
                        twitterUrl='/'
                        youtubeUrl='/'
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
                    <SocialIcons
                        facebookUrl='/'
                        githubUrl='/'
                        instagramUrl='/'
                        linkedinUrl='/'
                        twitterUrl='/'
                        youtubeUrl='/'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}