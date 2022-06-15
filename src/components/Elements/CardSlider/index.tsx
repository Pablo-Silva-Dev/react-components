import React, { ReactElement } from 'react';

import { Container, } from './styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface CardSliderProps {
    children: ReactElement[];
    showStatus?: boolean;
    autoPlay?: boolean;
    showIndicators?: boolean;
    interval?: number;
    infiniteLoop?: boolean;
}

/* personPhotoUrl: string;
personName: string;
personRole?: string;
testimonial: string;
ratings?: number;
cardStyle?: CSSProperties;
testimonialTextStyle?: CSSProperties;
titleStyle?: CSSProperties;
roletestimonialTextStyle?: CSSProperties;
cardClassName?: string;
titleClassName?: string;
testimonialClassName?: string;
roletestimonialClassName?: string;
glassEffect?: boolean; */


export function CardSlider({
    children,
    autoPlay,
    infiniteLoop,
    interval = 2400,
    showIndicators,
    showStatus
}: CardSliderProps) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
    };


    return (
        <Container>
            <Slider {...settings}>
             {children}
            </Slider>
        </Container>
    )
}