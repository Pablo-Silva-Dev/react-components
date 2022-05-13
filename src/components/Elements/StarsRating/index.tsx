import { CSSProperties, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useTheme } from 'styled-components';
import { Container, SubTitle } from './styles'

interface StarsRatingCardProps {
    rating: 1 | 2 | 3 | 4 | 5;
    title: string;
    avaliationLabels?: string[];
    tooltipDefaultText?: string;
    style?: CSSProperties;
    tooltipStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    onClick: () => void;
}

export function StarsRatingCard({ onClick,
    rating,
    title,
    avaliationLabels,
    tooltipDefaultText,
    style,
    tooltipStyle,
    titleStyle,
}
    : StarsRatingCardProps) {

    const theme = useTheme()

    return (
        <Container
            style={style}
        >
            <SubTitle
                style={titleStyle}
            >
                {title}
            </SubTitle>
            <Rating
                onClick={onClick}
                ratingValue={rating}
                showTooltip
                size={24}
                tooltipDefaultText={tooltipDefaultText}
                tooltipArray={avaliationLabels}
                tooltipStyle={
                    !tooltipStyle ?
                        {
                            background: theme.colors.primary,
                            color: theme.colors.white,
                            minHeight: 24,
                            minWidth: 24,
                            fontSize: 14,
                            textAlign: 'center',
                            marginLeft: -8,
                            display: 'block',
                            fontWeight: 'bold'
                        }
                        :
                        tooltipStyle
                }
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            />
        </Container>
    )
}