import { DisplayCode } from '../components/Display/DisplayCode';
import { SoftSlider as SoftSliderComponent } from '../components/Elements/SoftSlider'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";
import { NextImage } from '../components/Next/NextImage';
import { ContentContainer } from '../components/Elements/SoftSlider/styles';


export default function SoftSlider() {

    const props = {
        children: 'Description: An array of elements to display. An array of card element is recommended. Type: ReactElement[]. Required.',
        autoPlay: 'Description: Actives autoplay if true. Type: Boolean.',
        slidesToShow: 'Description: Number of elements to show. Type: Number. Required.',
        slidesToScroll: 'Description: Number of elements to scroll. Type: Number. Required.',
        infiniteLoop: 'Description: Actives infinite loop if true. Type: Boolean.',
        showArrows: 'Description: Display arrows if true. Type: Boolean.',
        transitionSpeed: 'Description: Transition speed value in milliseconds. Type: Number. Default: 400.',
        showIndicators: 'Description: Display dots indicator if true. Type: Boolean.',
        interval: 'Description: The number in milliseconds to wait for leap for next image. Default: 2400.',
        sliderContainerClassName: 'Description: SliderCard container className. Type: String',
        sliderContainerStyle: 'Description: SliderCard container style. Type: CSS Properties',
    }


    const images = [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img1.jpg',
        '/img2.jpg',
    ]

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SoftSlider'
                    />
                    <Text
                        content='A carousel with controls and options for cards.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SoftSliderComponent animationSpeed={20}>
                        {images.map(image => (
                            <ContentContainer key={image}>
                                <NextImage
                                    imgUrl={image}
                                    width={250}
                                    height={120}
                                />
                            </ContentContainer>
                        ))}
                    </SoftSliderComponent>
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="

                    "
                />
            </ComponentContainer>
        </Container>
    )
}
