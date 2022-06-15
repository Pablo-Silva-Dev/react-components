import React, { ReactElement } from 'react';
import Slider from "react-slick";



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


export default function Slick({
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
        slidesToScroll: 1
      };


    return (
          <div>
              <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
          </div>
    )
}