import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface FooterLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
}

export function FooterLink({ content, url, style }: FooterLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
      >
        {content}
      </Container>
    </Link>
  )
}