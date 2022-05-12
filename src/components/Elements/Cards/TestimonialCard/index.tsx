import { CSSProperties } from 'react';
import Image from 'next/image'
import StarRatings from 'react-star-ratings'

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
    ratings: 1 | 2 | 3 | 4 | 5 | 1.5 | 2.5 | 3.5 | 4.5 | 5.5;
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
    ratings,
    style,
    textStyle,
    titleStyle,
    roleTextStyle
}: TestimonialCardProps) {

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
                <StarRatings
                    rating={ratings}
                    starRatedColor="#ffc400"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name='rating'
                />
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