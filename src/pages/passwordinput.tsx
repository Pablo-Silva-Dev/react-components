import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { PasswordInput as PasswordInputComponent } from '../components/Forms/PasswordInput'
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

export default function PasswordInput() {

    const props = {
        showsIcon: 'Description: Define if icons will be rendered. Type: Boolean.',
        passwordIsVisible: 'Description: Define if password can be visible. Type: Boolean.',
        togglePassword: 'Description: Toggle between visible and hidden password. Type: Function.',
        inputStyle: 'Description: Input style. Type: CSS Properties.',
        inputClassName: 'Description: Input className. Type: String.',
        iconStyle: 'Description: Icon style. Type: CSS Properties.',
        iconClassName: 'Description: Icon className. Type: String.',
    }

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    function togglePassword() {
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='PasswordInput'
                    />
                    <Text
                        content='A styled password input ready to be used containing all input attributes. It is responsible and has validations by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <PasswordInputComponent
                        placeholder='your password'
                        showsIcon
                        passwordIsVisible={passwordVisibility}
                        togglePassword={togglePassword}
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
                    const [passwordVisibility, setPasswordVisibility] = 
                    useState(false)
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    function togglePassword() {
                        setPasswordVisibility(!passwordVisibility)
                    }"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <PasswordInputComponent
                    placeholder='your password'
                    showsIcon
                    passwordIsVisible={passwordVisibility}
                    togglePassword={togglePassword}
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}