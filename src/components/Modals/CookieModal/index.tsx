import { CSSProperties } from 'react';
import { NextLink } from '../../Next/NextLink';
import { Button, Container, Text, SubTitle } from './styles';

interface CookieModalProps {
    isOpen: boolean;
    cookiesTitle?: string;
    cookiesText?: string;
    privacePolicyTitle: string;
    buttonTitle: string;
    privacePolicyUrl: string;
    requestCloseModal: () => void;
    showAnimation?: boolean;
    modalClassName?: string;
    overlayClassName?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    textStyle?: CSSProperties;
    textClassName?: string;
    privacyLinkStyle?: CSSProperties;
    privacyLinkClassName?: string;
    buttonStyle?: CSSProperties;
    buttonClassName?: string;
}

export function CookieModal({
    isOpen,
    modalClassName,
    overlayClassName,
    showAnimation = true,
    requestCloseModal,
    cookiesText,
    cookiesTitle,
    buttonTitle,
    privacePolicyTitle,
    privacePolicyUrl,
    buttonClassName,
    buttonStyle,
    textClassName,
    textStyle,
    titleClassName,
    titleStyle,
    privacyLinkClassName,
    privacyLinkStyle,
}: CookieModalProps) {

    return (
        <Container
            isOpen={isOpen}
            className={modalClassName}
            overlayClassName={overlayClassName}
            showAnimation={showAnimation}
        >
            <SubTitle
                className={titleClassName}
                style={titleStyle}
            >
                {cookiesTitle}
            </SubTitle>
            <Text
                className={textClassName}
                style={textStyle}
            >
                {cookiesText}
            </Text>
            <NextLink
                title={privacePolicyTitle}
                url={privacePolicyUrl}
                className={privacyLinkClassName}
                style={privacyLinkStyle}
            />
            <Button
                onClick={requestCloseModal}
                className={buttonClassName}
                style={buttonStyle}
            >
                {buttonTitle}
            </Button>
        </Container>
    )
}