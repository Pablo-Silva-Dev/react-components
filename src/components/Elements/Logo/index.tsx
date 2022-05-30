import { CSSProperties } from 'react';
import Image from 'next/image'
import {name} from '../../../../package.json'

import { Container } from './styles';

interface LogoProps {
    imageUrl: string;
    size?: 'small' | 'medium' | 'large'
    style?: CSSProperties;
    className?: string;
}

export function Logo({
    imageUrl,
    size,
    style,
    className
}: LogoProps) {
    return (
        <Container
            size={size}
            style={style}
            className={className}
        >
            <Image
                src={imageUrl}
                alt={name}
                width='100%'
                height='100%'
            />
        </Container>
    )
}