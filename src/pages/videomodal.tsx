import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { VideoModal as VideoModalComponent } from '../components/Modals/VideoModal'
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

export default function VideoModal() {

    const props = {
        videoUrl: 'Description: The video embedded address. The videoUrl should be in the format https://www.youtube.com/embed/video_id, example: https://www.youtube.com/embed/TXFOSt9uli4. Type: String. Required.',
        isOpen: 'Description: Define if VideoModal should be open or closed. Type: Boolean. Required.',
        onRequestClose: 'Description: Function invoked on modal requests close. Type: Function. Required.',
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
                        content='VideoModal'
                    />
                    <Text
                        content='Used to trigger a Vídeo Modal and plays your video inside a modal.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <VideoModalComponent
                        isOpen={modal}
                        videoUrl='https://www.youtube.com/embed/TXFOSt9uli4'
                        onRequestClose={closeModal}
                        className='video-modal'
                        overlayClassName='react-modal-overlay-video'
                    />
                    <PrimaryButton
                        title='Open VideoModal'
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
                    <VideoModal
                        addressUrl='https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=10s'
                        isOpen={modal}
                        onRequestClose={closeModal}
                        overlayClassName='react-modal-overlay'
                        modalClassName='active-modal'
                        showAnimation
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}