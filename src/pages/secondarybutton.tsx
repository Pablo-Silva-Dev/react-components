import toast, { Toaster } from 'react-hot-toast'
import { DisplayCode } from '../components/Display/DisplayCode';
import { SecondaryButton as SecondaryButtonComponent } from '../components/Elements/SecondaryButton'
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

export default function SecondaryButton() {

    const props = {
        title: 'Description: Content to display in the button. Type: String. Required.',
        onClick: 'Description: Function to invoke on button click. Type: Function. Required.',
        disabled: 'Description: Disables the button. Type: Boolean.',
        loading: 'Description: Shows loading animation if true. Type: Boolean.',
        size: 'Description: Button size. Type: "tiny" | "small" | "medium" | "large". Default: "Medium".',
        style: 'Description: Button style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <div>
                <Toaster
                    position="bottom-center"
                />
            </div>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SecondaryButton'
                    />
                    <Text
                        content='Button to be used as alternative action on dialogs and actions.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SecondaryButtonComponent
                        onClick={() => toast.success('Secondary Button')}
                        title='Cancel'
                        size='small'
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
                    <SecondaryButton
                    onClick={() => toast.success('Secondary Button')}
                    title='Cancel'
                    size='tiny'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}