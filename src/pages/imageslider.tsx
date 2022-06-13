import { DisplayCode } from '../components/Display/DisplayCode';
import { ImageSlider as ImageSliderComponent } from '../components/Elements/ImageSlider'
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

export default function ImageSlider() {

    const props = {
        images: 'Description: An array of strings containing the images url to iterate. Type: String[]. Required.',
        imgWidth: 'Description: Images width. Type: Number. Required.',
        imgHeight: 'Description: Images height. Type: Number. Required.',
        imgDescription: 'Description: Image short description. Type: String.',
        autoPlay: 'Description: Actives autoplay if true. Type: Boolean.',
        infiniteLoop: 'Description: Actives infinite loop if true. Type: Boolean.',
        showIndicators: 'Description: Display dots indicator if true. Type: Boolean.',
        showStatus: 'Description: Display the image array length and the current index if true. Type: Boolean.',
        interval: 'Description: The number in milliseconds to wait for leap for next image. Default: 2400.',
        
    }


    const images = [
        'https://images.unsplash.com/photo-1655071516416-4bd19f80c60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        'https://images.unsplash.com/photo-1655114001474-944d5e6dabb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1655056555959-adbbdeda4217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80'
    ]

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ImageSlider'
                    />
                    <Text
                        content='A carousel with controls and options to render a collection of images.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ImageSliderComponent
                        images={images}
                        imgHeight={400}
                        imgWidth={700}
                        infiniteLoop
                        autoPlay
                        showStatus={false}
                    />
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
                    <ImageSlider
                      images={images}
                      imgHeight={400}
                      imgWidth={700}
                      infiniteLoop
                      autoPlay
                      showStatus={false}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}