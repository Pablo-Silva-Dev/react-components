import { Code } from '@chakra-ui/react'
import { CountUpAnimation } from '../components/Animations/CountUp';
import { InfoCard } from '../components/Elements/Cards/InfoCard';
import { CodeContainer } from '../components/Display/CodeContainer';
import { GoogleMap as GoogleMapComponent } from '../components/Elements/GoogleMap'
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

export default function GoogleMap() {

    const props = {
        addressUrl: 'Description: Path containing Google Map URL. Type: String. Required.',
        size: 'Description: Image size. Type: "small" | "medium" | "large". Default: "medium".',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='GoogleMap'
                    />
                    <Text
                        content='Used to display a embeded GoogleMap iframe.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <GoogleMapComponent
                        addressUrl='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
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
                <InfoCard
                    title='Important:'
                    content='You must to use addressUrl prop in the format: https://maps.google.com/maps?q=your_address_comes_here&output=embed. You can use https://google-map-generator.com/ to help you to generate the addressUrl in the correct format, otherwise your map will break.'
                />
                <CodeContainer
                //eslint-disable-next-line
                    children="
                        <GoogleMapComponent
                        addressUrl='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
                        />"
                />
            </ComponentContainer>
        </Container>
    )
}