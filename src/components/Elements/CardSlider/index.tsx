import { CSSProperties, ReactElement } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, } from './styles';

interface CardSliderProps {
    children: ReactElement[];
    slidesToShow: number;
    slidesToScroll: number;
    showArrows?: boolean;
    autoPlay?: boolean;
    showIndicators?: boolean;
    transitionSpeed?: number;
    infiniteLoop?: boolean;
    sliderContainerStyle?: CSSProperties;
    sliderContainerClassName?: string;
}

export function CardSlider({
    children,
    autoPlay = true,
    infiniteLoop = true,
    transitionSpeed = 400,
    showIndicators,
    showArrows,
    sliderContainerClassName,
    sliderContainerStyle,
    slidesToScroll,
    slidesToShow,
}: CardSliderProps) {

    var settings = {
        dots: showIndicators,
        arrows: showArrows,
        infinite: infiniteLoop,
        autoplay: autoPlay,
        speed: transitionSpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Container
            className={sliderContainerClassName}
            style={sliderContainerStyle}
        >
            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    )
}