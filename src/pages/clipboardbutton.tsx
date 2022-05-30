import toast, { Toaster } from 'react-hot-toast'
import { DisplayCode } from '../components/Display/DisplayCode';
import { ClipboardButton as ClipboardButtonComponent } from '../components/Elements/ClipboardButton'
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

export default function ClipboardButton() {

    const myContent = 'ClipboardButton component is cool!'

    const props = {
        content: 'Description: Content to copy. Type: String. Required.',
        copiedFeedbackMessage: 'Description: Message to display when content was copied. Type: String. Required.',
        notCopiedFeedbackMessage: 'Description: Message to display when content is not copied yet. Type: String. Required.',
        onCopy: 'Description: Callback function invoked after component was copied. Type: Function.',
        style: 'Description:  ClipboardButton style. Type: CSS Properties.',
        className: 'Description: ClipboardButton className. Type: String.',
        iconStyle: 'Description: Icon style. Type: CSS Properties.',
        iconClassName: 'Description: Icon className. Type: String.',
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
                        content='ClipboardButton'
                    />
                    <Text
                        content='Used to easily copy content.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ClipboardButtonComponent
                        content={myContent}
                        copiedFeedbackMessage='Copied!'
                        notCopiedFeedbackMessage='Click here to copy your content.'
                        onCopy={() => toast.success('Content copied!')}
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
                    <ClipboardButton
                    content={myContent}
                    copiedFeedbackMessage='Copied!'
                    notCopiedFeedbackMessage='Click here to copy your content.'
                    onCopy={() => toast.success('Content copied!')}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}