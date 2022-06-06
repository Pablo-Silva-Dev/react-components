import React, { CSSProperties } from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutubeSquare
 } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Button, Container } from './styles';

interface SocialCollectionProps {
    instagramUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    iconStyle?: CSSProperties;
}

export function SocialCollection({
    facebookUrl,
    twitterUrl,
    githubUrl,
    linkedinUrl,
    youtubeUrl,
    instagramUrl,
    iconStyle
}: SocialCollectionProps) {

    const theme = useTheme()

    function openExternUrl(url: string) {
        window.location.href = url
    }

    return (
        <Container>
            {instagramUrl &&
                <Button
                    onClick={() => openExternUrl(instagramUrl)}
                >
                    <FaInstagramSquare
                        size={24}
                        color={theme.colors.primary}
                        style={iconStyle}
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
                        style={iconStyle}
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
                        style={iconStyle}
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
                        style={iconStyle}
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
                        style={iconStyle}
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
                        style={iconStyle}
                    />
                </Button>
            }
        </Container>
    )
}