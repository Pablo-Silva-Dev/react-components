import React from 'react';
import { Container } from './styles';
import Modal from 'react-modal';

interface VideoModalProps {
    addressUrl: string
    isOpen: boolean;
    onRequestClose: () => void;
}

export function VideoModal({
    addressUrl,
    isOpen,
    onRequestClose
}: VideoModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='video-modal'
            overlayClassName='react-modal-overlay-video'
        >
            <Container
                src={addressUrl}
            />
        </Modal>
    )
}