import { ReactNode, CSSProperties } from 'react';
import { SixthContainer } from '../../Footer/styles'

interface SixthFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterSixthSection({ children, style }: SixthFooterSectionProps) {
    return (
        <SixthContainer
            style={style}
        >
            {children}
        </SixthContainer>
    )
}