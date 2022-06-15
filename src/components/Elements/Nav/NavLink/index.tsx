import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface HeaderLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ content, url, style, className, onClick }: HeaderLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
        className={className}
        onClick={onClick}
      >
        {content}
      </Container>
    </Link>
  )
}