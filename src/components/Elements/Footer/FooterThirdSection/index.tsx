import { ReactNode, CSSProperties } from 'react';
import { ThirdContainer } from '../../Footer/styles'

interface ThirdFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterThirdSection({ children, style }: ThirdFooterSectionProps) {
    return (
        <ThirdContainer
            style={style}
        >
            {children}
        </ThirdContainer>
    )
}