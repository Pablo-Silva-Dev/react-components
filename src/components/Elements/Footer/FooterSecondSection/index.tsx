import { ReactNode, CSSProperties } from 'react';
import { SecondContainer } from '../../Footer/styles'

interface SecondFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterSecondSection({ children, style }: SecondFooterSectionProps) {
    return (
        <SecondContainer
            style={style}
        >
            {children}
        </SecondContainer>
    )
}