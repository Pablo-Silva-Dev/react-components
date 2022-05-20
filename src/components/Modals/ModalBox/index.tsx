import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ModalBoxProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: ReactNode;
    className?: string;
    overlayClassName?: string;
}

export function ModalBox({
    isOpen,
    onRequestClose,
    children,
    className,
    overlayClassName
}: ModalBoxProps) {

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={className}
            overlayClassName={overlayClassName}
        >
           {children}
        </Container>
    )
}