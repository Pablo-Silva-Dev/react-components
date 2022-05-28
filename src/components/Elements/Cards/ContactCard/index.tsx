import React, { CSSProperties } from 'react';
import { useTheme } from 'styled-components'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import {
    Container,
    Text,
    TextContainer,
    Title,
    WhatsappButton
} from './styles';

interface ContactCardProps {
    title: string;
    email: string;
    phone?: string;
    address?: string;
    contactMessage?: string;
    whatsappConversationUrl?: string;
    style?: CSSProperties;
    textStyle?: CSSProperties;
    titleStyle?: CSSProperties
}

export function ContactCard({
    title,
    email,
    phone,
    address,
    contactMessage,
    whatsappConversationUrl,
    style,
    textStyle,
    titleStyle
}: ContactCardProps) {

    const theme = useTheme()

    return (
        <Container
            style={style}
        >
            <Title
                style={titleStyle}
            >
                {title}
            </Title>
            {email &&
                <TextContainer>
                    <MdEmail
                        size={24}
                        color={theme.colors.primary}
                    />
                    <Text
                        style={textStyle}
                    >
                        {email}
                    </Text>
                </TextContainer>
            }
            {phone &&
                <TextContainer>
                    <MdLocalPhone
                        size={24}
                        color={theme.colors.primary}
                    />
                    <Text
                        style={textStyle}
                    >
                        {phone}
                    </Text>
                </TextContainer>
            }
            {address &&
                <TextContainer>
                    <MdLocationOn
                        size={24}
                        color={theme.colors.primary}
                    />
                    <Text
                        style={textStyle}
                    >
                        {address}
                    </Text>
                </TextContainer>
            }
            <Text
                style={textStyle}
            >
                {contactMessage}
            </Text>
            {whatsappConversationUrl &&
                <WhatsappButton
                    onClick={() => window.open(whatsappConversationUrl, "_blank")}
                >
                    <FaWhatsappSquare
                        color={theme.colors.white}
                        size={40}
                        style={{
                            marginRight: 12
                        }}
                    />
                    Entrar em contato
                </WhatsappButton>
            }
        </Container>
    )
}