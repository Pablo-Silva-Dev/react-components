import { DisplayCode } from '../components/Display/DisplayCode';
import { ImageCard as ImageCardComponent } from '../components/Cards/ImageCard'
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

export default function Avatar() {

    const props = {
        imgUrl: 'Description: Path to find image. Type: String. Required.',
        imgTitle: 'Description: Image title. Type: String.',
        imgDescription: 'Description: Image short description. Type: String.',
        imgSize: 'Description: Image size. Type: | "small" | "medium" | "large". Default: "medium".',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        imageTitleStyle: 'Description: ImageTitle style. Type: CSS Properties.',
        imageTitleClassName: 'Description: ImageTitle className. Type: String.',
        imageDescriptionStyle: 'Description: ImageDescription style. Type: CSS Properties.',
        imageDescriptionClassName: 'Description: ImageDescription className. Type: String.',
        textStyle: 'Description: Text style. Type: CSS Properties.',
        textClassName: 'Description: Text className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
    }


    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='CardImage'
                    />
                    <Text
                        content='Used to display a Card Image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ImageCardComponent
                        imgUrl='https://images.unsplash.com/photo-1597784968750-d961bbcf3f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                        imgTitle='Forest'
                        imgDescription="Amazing travel to forest."
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
                    <ImageCardComponent
                    imgUrl='https://images.unsplash.com/photo-1597784968750-d961bbcf3f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                    imgTitle='Forest'
                    imgDescription='Amazing travel to forest.'
                   />"
                />
            </ComponentContainer>
        </Container>
    )
}