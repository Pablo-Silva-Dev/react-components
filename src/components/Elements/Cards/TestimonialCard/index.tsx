import { CSSProperties } from 'react';
import Image from 'next/image'
import { MdOutlineStarPurple500 } from 'react-icons/md'

import {
    Container,
    StarsContainer,
    SubTitle,
    Text,
    Title
} from './styles';

interface TestimonialCardProps {
    personPhotoUrl: string;
    alt: string;
    personName: string;
    personRole?: string;
    testimonial: string;
    stars: 4 | 5;
    style?: CSSProperties;
    textStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    roleTextStyle?: CSSProperties;
}

export function TestimonialCard({
    personPhotoUrl,
    alt,
    personName,
    personRole,
    testimonial,
    stars,
    style,
    textStyle,
    titleStyle,
    roleTextStyle
}: TestimonialCardProps) {


    const generateStars = Array.from(Array(stars).keys())

    return (
        <Container
            style={style}
            data-testid='testimonialcard-id'
        >
            <Image
                src={personPhotoUrl}
                alt={alt}
                width={120}
                height={120}
                style={{
                    borderRadius: '50%',
                }}
            />
            <Text
                style={textStyle}
            >
                {
                    testimonial?.length > 320 ?
                        testimonial.substring(0, 320).concat('...') :
                        testimonial
                }
            </Text>

            <StarsContainer>
                {generateStars.map(star => (
                    <MdOutlineStarPurple500 color='#ffc400' size={20} key={star} />
                ))}
            </StarsContainer>

            <Title
                style={titleStyle}
            >
                {
                    personName?.length > 24 ?
                        personName.substring(0, 24).concat('...') :
                        personName
                }
            </Title>
            {
                personRole &&
                <SubTitle
                style={roleTextStyle}
                >
                    {
                        personRole?.length > 32 ?
                            personRole.substring(0, 32).concat('...') :
                            personRole
                    }
                </SubTitle>
            }
        </Container>
    )
}