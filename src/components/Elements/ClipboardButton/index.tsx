import { CSSProperties } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { Container, Text } from './styles';

interface ClipboardButtonProps {
    onClick: () => void;
    isCopied: boolean;
    copiedFeedbackMessage: string;
    notCopiedFeedbackMessage: string;
    style?: CSSProperties;
    className?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
}

export function ClipboardButton({
    isCopied,
    copiedFeedbackMessage,
    notCopiedFeedbackMessage,
    onClick,
    style,
    iconStyle,
    className,
    iconClassName
}: ClipboardButtonProps) {

    return (
        <Container
            style={style}
            className={className}
            onClick={onClick}
        >
            <MdContentCopy
                size={24}
                className={iconClassName}
                style={iconStyle}
            />
            <Text>{
                isCopied ?
                    copiedFeedbackMessage
                    :
                    notCopiedFeedbackMessage
            }</Text>
        </Container>
    )
}
