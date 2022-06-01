import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from 'styled-components'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import {
    CardContainer,
    Container,
    Text,
    TextContainer,
    Title,
    WhatsappButton
} from './styles';

interface ContactCardProps {
    email: string;
    cardTitle?: string;
    phone?: string;
    address?: string;
    contactMessage?: string;
    cardStyle?: CSSProperties;
    textStyle?: CSSProperties;
    titleCardStyle?: CSSProperties;
    cardClassName?: string;
    textClassName?: string;
    titleCardClassName?: string;
    emailIcon?: ReactNode;
    phoneIcon?: ReactNode;
    addressIcon?: ReactNode;
    children?: ReactNode;
    glassEffect?: boolean;
}

export function ContactCard({
    email,
    cardTitle,
    phone,
    address,
    emailIcon,
    phoneIcon,
    addressIcon,
    children,
    contactMessage,
    cardStyle,
    cardClassName,
    titleCardStyle,
    titleCardClassName,
    textStyle,
    textClassName,
    glassEffect
}: ContactCardProps) {

    return (
        <Container>
            <CardContainer
                style={cardStyle}
                className={glassEffect ? 'glassEffect' : cardClassName}
            >
                <Title
                    style={titleCardStyle}
                    className={titleCardClassName}
                >
                    {cardTitle}
                </Title>
                {email &&
                    <TextContainer>
                        {emailIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {email}
                        </Text>
                    </TextContainer>
                }
                {phone &&
                    <TextContainer>
                        {phoneIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {phone}
                        </Text>
                    </TextContainer>
                }
                {address &&
                    <TextContainer>
                        {addressIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {address}
                        </Text>
                    </TextContainer>
                }
                <Text
                    style={textStyle}
                    className={textClassName}
                >
                    {contactMessage}
                </Text>
                {children}
            </CardContainer>
        </Container>
    )
}