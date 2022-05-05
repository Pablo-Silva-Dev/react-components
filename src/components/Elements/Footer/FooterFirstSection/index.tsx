import { ReactNode, CSSProperties } from 'react';
import { FirstContainer } from '../styles'

interface FirstFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterFirstSection({ children, style }: FirstFooterSectionProps) {
    return (
        <FirstContainer
            style={style}
        >
            {children}
        </FirstContainer>
    )
}