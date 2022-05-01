import { CSSProperties } from 'react';
import Link from 'next/link'
import { TextLink } from './styles'

interface NextLinkProps {
    url: string;
    title: string;
    style?: CSSProperties;
}

export function NextLink({ url, title, style }: NextLinkProps) {
    return (
        <Link href={url} passHref>
            <TextLink style={style}>{title}</TextLink>
        </Link>
    )
}