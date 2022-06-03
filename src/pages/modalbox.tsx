import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { ModalBox as ModalBoxComponent } from '../components/Modals/ModalBox'
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

export default function ModalBox() {

    const props = {
        isOpen: 'Description: Define if ModalBox should be open or closed. Type: Boolean. Required.',
        onRequestClose: 'Description: Function invoked on modal requests close. Type: Function. Required.',
        children: 'Description: React elements to display. Type: ReactNode.',
        showAnimation: 'Description: Define if the ModalBox should open with an animation. Type: Boolean. Default: true.',
        modalClassName: 'Description: Modal container ClassName. Type: String.',
        overlayClassName: 'Description: Modal overlay ClassName. Type: String.'
    }


    const [modal, setModal] = useState(true)

    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ModalBox'
                    />
                    <Text
                        content='Used to trigger a modal.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ModalBoxComponent
                        isOpen={modal}
                        onRequestClose={closeModal}
                        overlayClassName='react-modal-overlay'
                        modalClassName='active-modal'
                        showAnimation
                    >
                        <p>Your Content</p>
                    </ModalBoxComponent>
                    <PrimaryButton
                        title='Open ModalBox'
                        onClick={openModal}
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
                    children="const [modal, setModal] = useState(true)"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    function closeModal() {
                        setModal(false)
                    }
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    function openModal() {
                        setModal(true)
                    }
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <ModalBoxComponent
                        isOpen={modal}
                        onRequestClose={closeModal}
                        overlayClassName='react-modal-overlay'
                        modalClassName='active-modal'
                        showAnimation
                    >
                        <p>Your Content</p>
                    </ModalBoxComponent>"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}