import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';
import {
    FaInstagramSquare,
    FaTwitterSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaYoutubeSquare
} from 'react-icons/fa'

import {
    Avatar,
    AvatarContainer,
    ColorContainer,
    Container,
    ContentContainer,
    Text,
    Title,
    Button,
    SocialContainer
} from './styles';

interface ProfileCardProps {
    imgUrl: string;
    imgAlt: string;
    title: string;
    bio?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    bgColor?: string;
    style?: CSSProperties;
}

export function ProfileCard({
    imgUrl,
    imgAlt,
    title,
    bio,
    instagramUrl,
    twitterUrl,
    facebookUrl,
    githubUrl,
    linkedinUrl,
    youtubeUrl,
    bgColor,
    style

}: ProfileCardProps) {

    const theme = useTheme()

    function openExternUrl(url: string) {
        return window.open(url, "_blank");
    }

    return (
        <Container
            style={style}
        >
            <ColorContainer
                bgColor={bgColor}
            >
                <AvatarContainer>
                    <Avatar
                        src={imgUrl}
                        alt={imgAlt}
                        width={120}
                        height={120}
                        data-testid='profile-card-id'
                    />
                </AvatarContainer>
            </ColorContainer>
            <ContentContainer>
                <Title>{title}</Title>
                {bio &&
                    <Text>{bio}</Text>
                }
                <SocialContainer>
                    {instagramUrl &&
                        <Button
                            onClick={() => openExternUrl(instagramUrl)}
                        >
                            <FaInstagramSquare
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                    {twitterUrl &&
                        <Button
                            onClick={() => openExternUrl(twitterUrl)}
                        >
                            <FaTwitterSquare
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                    {facebookUrl &&
                        <Button
                            onClick={() => openExternUrl(facebookUrl)}
                        >
                            <FaFacebookSquare
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                    {githubUrl &&
                        <Button
                            onClick={() => openExternUrl(githubUrl)}
                        >
                            <FaGithubSquare
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                    {linkedinUrl &&
                        <Button
                            onClick={() => openExternUrl(linkedinUrl)}
                        >
                            <FaLinkedin
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                    {youtubeUrl &&
                        <Button
                            onClick={() => openExternUrl(youtubeUrl)}
                        >
                            <FaYoutubeSquare
                                size={24}
                                color={theme.colors.primary}
                            />
                        </Button>
                    }
                </SocialContainer>
            </ContentContainer>

        </Container>
    )
}