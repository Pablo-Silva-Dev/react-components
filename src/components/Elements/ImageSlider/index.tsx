import { Container, } from './styles';
import Image from 'next/image'
import { TestimonialCard } from '../../Cards/TestimonialCard';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface ImageSliderProps {
    images: string[];
    imgWidth: number;
    imgHeight: number;
    showStatus?: boolean;
    autoPlay?: boolean;
    interval?: number;
    infiniteLoop?: boolean;
}


export function ImageSlider({
    images,
    imgWidth,
    imgHeight,
    autoPlay,
    infiniteLoop,
    interval = 2400,
    showStatus
}: ImageSliderProps) {



  /*   const profiles = [
        {
            url: 'https://images.unsplash.com/photo-1654907300621-78c0edc0570a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            name: 'Samantha Lee',
            role: 'Designer',
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            url: 'https://images.unsplash.com/photo-1655051605841-2d90737e7206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            name: 'Alicia',
            role: 'Designer',
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },

    ] */

    return (
        <Container>
            <Carousel
                showStatus={showStatus}
                showArrows={false}
                swipeable
                emulateTouch
                autoPlay={autoPlay}
                interval={interval}
                infiniteLoop={infiniteLoop}
            >
                {
                    images.map((image, index) => (
                        <>
                            <Image
                                src={image}
                                alt="image"
                                key={index}
                                width={imgWidth}
                                height={imgHeight}
                                objectFit='cover'
                            />
                        </>
                    ))
                }

            </Carousel>
        </Container >
    )
}