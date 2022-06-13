import { Container, } from './styles';
import Image from 'next/image'
import { TestimonialCard } from '../../Cards/TestimonialCard';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ReactNode } from 'react';

interface CardSliderProps {
    children: ReactNode;
    showStatus?: boolean;
    autoPlay?: boolean;
    showIndicators?: boolean;
    interval?: number;
    infiniteLoop?: boolean;
}


export function CardSlider({
    children,
    autoPlay,
    infiniteLoop,
    interval = 2400,
    showIndicators,
    showStatus
}: CardSliderProps) {

    return (
        <Container>
            {/*@ts-ignore*/ }
            <Carousel
                showStatus={showStatus}
                showArrows={false}
                swipeable
                emulateTouch
                autoPlay={autoPlay}
                interval={interval}
                infiniteLoop={infiniteLoop}
                showIndicators={showIndicators}
            >
                {children}
            </Carousel>
        </Container >
    )
}