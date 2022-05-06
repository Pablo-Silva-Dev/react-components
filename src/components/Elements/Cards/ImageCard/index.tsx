import { CSSProperties } from 'react';
import Image from 'next/image'

import { Container, Text, Title } from './styles';

interface ImageCardProps {
    imgUrl: string;
    imgAlt: string;
    imgTitle?: string;
    imgDescription?: string;
    style?: CSSProperties;
}

export function ImageCard({
    imgAlt,
    imgUrl,
    imgTitle,
    imgDescription,
    style
}: ImageCardProps) {
    return (
        <Container
            style={style}
        >
            <Image
                src={imgUrl}
                alt={imgAlt}
                width={320}
                height={320}
            />

            {imgTitle &&
                <Title>
                    {
                        imgTitle?.length > 24 ?
                            imgTitle.substring(0, 24).concat('...') :
                            imgTitle
                    }
                </Title>
            }
            {
                imgDescription &&
                <Text>
                    {
                        imgDescription?.length > 72 ?
                            imgDescription.substring(0, 72).concat('...') :
                            imgDescription
                    }
                </Text>
            }
        </Container>
    )
}