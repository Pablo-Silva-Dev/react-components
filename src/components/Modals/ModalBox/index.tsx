import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ModalBoxProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: ReactNode;
    className?: string;
    overlayClassName?: string;
    showAnimation?: boolean
}

export function ModalBox({
    isOpen,
    onRequestClose,
    children,
    className,
    overlayClassName,
    showAnimation
}: ModalBoxProps) {

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={className}
            overlayClassName={overlayClassName}
            showAnimation={showAnimation}
        >
           {children}
        </Container>
    )
}