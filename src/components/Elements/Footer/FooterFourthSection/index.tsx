import { ReactNode, CSSProperties } from 'react';
import { FourthContainer } from '../../Footer/styles'

interface FourthFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterFourthSection({ children, style }: FourthFooterSectionProps) {
    return (
        <FourthContainer
            style={style}
        >
            {children}
        </FourthContainer>
    )
}