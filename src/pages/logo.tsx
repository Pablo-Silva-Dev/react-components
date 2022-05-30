import { DisplayCode } from '../components/Display/DisplayCode';
import { Logo as LogoComponent } from '../components/Elements/Logo'
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

export default function Logo() {

    const props = {
        imgUrl: 'Description: Path to find image. Type: String. Required.',
        size: 'Description: Image size. Type: "small" | "medium" | "large". Default: "medium".',
        style: 'Description: Image style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Logo'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <LogoComponent
                        imageUrl='https://www.pablosilvadev.com.br/logo.svg'
                        size='medium'
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
                    <Logo
                    imageUrl='https://www.pablosilvadev.com.br/logo.svg'
                    size='medium'
                />"
                />
            </ComponentContainer>
        </Container>
    )
}