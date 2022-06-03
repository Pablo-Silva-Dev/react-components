import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { SubmitButton as SubmitButtonComponent } from '../components/Forms/SubmitButton'
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

export default function SubmitButton() {

    const props = {
        title: 'Description: Content to display in the button. Type: String. Required.',
        onClick: 'Description: Function to invoke on button click. Type: Function. Required.',
        disabled: 'Description: Disables the button. Type: Boolean.',
        loading: 'Description: Shows loading animation if true. Type: Boolean.',
        size: 'Description: Button size. Type: "tiny" | "small" | "medium" | "large". Default: "Medium".',
        style: 'Description: Button style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
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
                        content='SubmitButton'
                    />
                    <Text
                        content='Button used in forms.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SubmitButtonComponent
                        onClick={signIn}
                        title='Send'
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
                    <SubmitButton
                        onClick={signIn}
                        title='Send'
                        disabled={loading}
                        loading={loading}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}