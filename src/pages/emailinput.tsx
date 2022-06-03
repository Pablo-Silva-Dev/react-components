import { DisplayCode } from '../components/Display/DisplayCode';
import { EmailInput as EmailInputComponent } from '../components/Forms/EmailInput'
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

export default function EmailInput() {

    const props = {
        showsIcon: 'Description: Define if icons will be rendered. Type: Boolean.',
        inputStyle: 'Description: Input style. Type: CSS Properties.',
        inputClassName: 'Description: Input className. Type: String.',
        icon: 'Description: A space to render your own icon. Type: ReactNode.',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='EmailInput'
                    />
                    <Text
                        content='A styled e-mail input ready to be used containing all input attributes. It is responsible and has validations by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <EmailInputComponent
                        placeholder='your e-mail'
                        showsIcon
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
                    <EmailInputComponent
                        placeholder='your e-mail'
                        showsIcon
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}