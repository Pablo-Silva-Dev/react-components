import { ReactNode, CSSProperties } from 'react';
import { FivethContainer } from '../../Footer/styles'

interface FivethFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function FooterFivethSection({ children, style }: FivethFooterSectionProps) {
    return (
        <FivethContainer
            style={style}
        >
            {children}
        </FivethContainer>
    )
}