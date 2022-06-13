import toast, { Toaster } from 'react-hot-toast';
import { ActionCard as ActionCardComponent } from '../components/Cards/ActionCard';
import { DisplayCode } from '../components/Display/DisplayCode';
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
        title: 'Description: Card title. Type: String. Required.',
        content: 'Description: Card content. Type: String. Required.',
        primaryActionButtonTitle: 'Description: PrimaryActionButton title. Type: String. ',
        secondaryActionButtonTitle: 'Description: SecondaryActionButton title. Type: String. ',
        primaryAction: 'Description: A function to trigger the primary action at click. Type: Function.',
        secondaryAction: 'Description: A function to trigger the secondary action at click. Type: Function.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        textStyle: 'Description: Content text style. Type: CSS Properties.',
        textClassName: 'Description: Content text className. Type: String.',
        primaryActionButtonStyle: 'Description: PrimaryActionButton style. Type: CSS Properties.',
        primaryActionButtonClassName: 'Description: PrimaryActionButton className. Type: String.',
        secondaryActionButtonStyle: 'Description: SecondaryActionButton style. Type: CSS Properties.',
        secondaryActionButtonClassName: 'Description: SecondaryActionButton className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
    }

    const cardData = {
        title: 'Connection failed. - Check your connection.',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book and the old ship. '
    }

    function displayToast(message: string) {
        toast.success(message)
    }

    return (
        <Container>
            <div>
                <Toaster
                    position='bottom-center'
                />
            </div>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ActionCard'
                    />
                    <Text
                        content='An elegant card containing a commentary of a person and stars ratings.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ActionCardComponent
                        title={cardData.title}
                        content={cardData.content}
                        primaryActionButtonTitle='Confirm'
                        secondaryActionButtonTitle='Cancel'
                        primaryAction={() => displayToast('Action confirmed!')}
                        secondaryAction={() => displayToast('Action cancelled!')}
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
                    const cardData = {
                        title: 'Connection failed. - Check your connection.',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book and the old ship. '
                    }
                "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children=" function displayToast(message: string){
                        toast.success(message)}"
                        hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <ActionCard
                        title={cardData.title}
                        content={cardData.content}
                        primaryActionButtonTitle='Confirm'
                        secondaryActionButtonTitle='Cancel'
                        primaryAction={() => displayToast('Action confirmed!')}
                        secondaryAction={() => displayToast('Action cancelled!')}
                     />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}