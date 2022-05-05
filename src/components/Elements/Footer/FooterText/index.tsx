import{ CSSProperties } from 'react';
import { Container } from './styles';

interface FooterTextProps{
    content: string;
    style?: CSSProperties;
}

export function FooterText({content, style} : FooterTextProps) {
return (
  <Container
    style={style}
  >
      {content}
  </Container>
)
}