import { CSSProperties } from 'react';
import Image from 'next/image'

import { Container } from './styles';

interface LogoProps {
    imageUrl: string;
    imgAlt: string;
    size?: 'small' | 'medium' | 'large'
    style?: CSSProperties;
}

export function Logo({
    imgAlt,
    imageUrl,
    size,
    style
}: LogoProps) {
    return (
        <Container
            size={size}
            style={style}
        >
            <Image
                src={imageUrl}
                alt={imgAlt}
                width='100%'
                height='100%'
            />
        </Container>
    )
}