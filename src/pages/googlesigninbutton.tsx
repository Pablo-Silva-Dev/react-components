import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { GoogleSignInButton as GoogleSignInButtonComponent } from '../components/Forms/GoogleSignInButton';
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

export default function GoogleSignInButton() {

    const props = {
        title: 'Description: Button title. Type: String. Required.',
        onClick: 'Description: Function to invoke on click. Type: Async Function. Required.',
        loading: 'Description: Render a loading animation if true. Type: Boolean. Default: False.',
        disabled: 'Description: Disables the component if true. Type: Boolean. Default: False.',
        animationType: 'Description: Animation type. Type: "bars" | "bubbles" | "balls" | "blank" | "cylon" | "spin" | "spokes" |"cubes" | "spinningBubbles". Default: "bubbles".',
        themeColor: 'Description: Button style. Type: CSS Properties.',
        style: 'Description: Button style. Type: CSS Properties.',
        className: 'Description: Button className. Type: "dark" | "light". Default: "light".',
    }

    const [loading, setLoading] = useState(false)

    async function signIn() {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
            return () => clearTimeout(timer)
        }, 1000)
    }

   
    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='GoogleSignInButton'
                    />
                    <Text
                        content='A button with Google label and status indicator used to sign in with Google.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <GoogleSignInButtonComponent
                        title='Login with Google'
                        onClick={signIn}
                        disabled={loading}
                        loading={loading}
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
                    children="const [loading, setLoading] = useState(false)"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    async function signIn() {
                        setLoading(true)
                        const timer = setTimeout(() => {
                            setLoading(false)
                            return () => clearTimeout(timer)
                        }, 1000)
                    }"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <GoogleSignInButtonComponent
                        title='Login with Google'
                        onClick={sign}
                        disabled={loading}
                        loading={loading}
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}