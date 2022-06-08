import { DisplayCode } from '../components/Display/DisplayCode';
import { DisplayInfo } from '../components/Display/DisplayInfo';
import { NextImage as NextImageComponent } from '../components/Next/NextImage'
import { NextLink } from '../components/Next/NextLink';
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

export default function NextImage() {

    const props = {
        imgUrl: 'Description: The image address. Type: String. Required.',
        width: 'Description: Define the image width. Type: Number. Required.',
        height: 'Description: Define the image height. Type: Number. Required.',
        style: 'Description: Image style. Type: CSSProperties.',
        className: 'Description: Image className. Type: String.',
    }

    /*  imgUrl: string;
     width: number;
     height: number;
     style?: CSSProperties;
     className?: string; */

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='NextImage'
                    />
                    <Text
                        content='Used to set your page title and use the same string as keyword for your website.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <NextImageComponent
                        imgUrl='https://images.unsplash.com/photo-1654659332294-3dd5664e0253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        width={400}
                        height={320}
                    />
                </PreviewContainer>
                <DisplayInfo
                    title='Important:'
                    content='You must config your next.config.js file before to use NextImage component.'
                >
                    <NextLink
                        title='See docs.'
                        url='https://nextjs.org/docs/api-reference/next/image#domains'
                    />
                </DisplayInfo>

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
                    <NextImage
                        imgUrl='https://images.unsplash.com/photo-1654659332294-3dd5664e0253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        width={400}
                        height={320}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}