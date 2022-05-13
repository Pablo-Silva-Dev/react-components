import Image from 'next/image'
import { CSSProperties } from 'react';
import { Container } from './styles';

interface AvatarProps {
    imageUrl: string;
    imgAlt: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    style?: CSSProperties;
}

/* export const Container = styled.div<AvatarProps>`
  border-radius: 50%;
  width: ${({ size }) =>
    size === "tiny"
      ? 40
      : size === "small"
      ? 64
      : size === "large"
      ? 112
      : 88};
  height: ${({ size }) =>
    size === "tiny"
      ? 40
      : size === "small"
      ? 64
      : size === "large"
      ? 112
      : 88};
`; */

export function Avatar({ imageUrl, imgAlt, size, style }: AvatarProps) {
    return (
        <Container
            style={style}
            size={size}
        >
            <Image
                src={imageUrl}
                width={size === "tiny"
                    ? 40
                    : size === "small"
                        ? 64
                        : size === "large"
                            ? 112
                            : 88}
                height={size === "tiny"
                    ? 40
                    : size === "small"
                        ? 64
                        : size === "large"
                            ? 112
                            : 88}
                alt={imgAlt}
                style={{
                    borderRadius: '50%'
                }}
            />
        </Container>
    )
}