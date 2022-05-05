import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, SlickContainer } from './styles';
import Image from 'next/image'

interface ImageSliderProps {
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    firstImgUrl: string;
    secondImgUrl: string;
    thirdImgUrl?: string;
    fourthImgUrl?: string;
    fivethImgUrl?: string;
    sixthImgUrl?: string;
    showDots?: boolean,
    speed?: 250 | 500 | 750 | 1000,
    slidesToShow?: 1 | 2 | 3 | 4 | 5 | 6,
    slidesToScroll?: 1 | 2 | 3 | 4 | 5 | 6,
    autoplay?: boolean,
}

export function ImageSlider({
    imgAlt,
    imgWidth,
    imgHeight,
    firstImgUrl,
    secondImgUrl,
    thirdImgUrl,
    fourthImgUrl,
    fivethImgUrl,
    sixthImgUrl,
    showDots,
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay
}: ImageSliderProps) {

    const settings = {
        dots: showDots,
        infinite: true,
        speed: speed,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay,
        acessibility: true
    };

    return (
        <Container>
            <Slider
                {...settings}

            >
                {firstImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={firstImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }
                {secondImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={secondImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }

                {thirdImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={thirdImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }
                {fourthImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={fourthImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }
                {fivethImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={fivethImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }
                {sixthImgUrl &&
                    <SlickContainer>
                        {/* eslint-disable */}
                        <img
                            alt={imgAlt}
                            src={sixthImgUrl}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    </SlickContainer>
                }
            </Slider>
        </Container>
    )
}