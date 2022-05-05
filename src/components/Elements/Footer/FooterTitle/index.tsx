import{ CSSProperties } from 'react';
import { Container } from './styles';

interface FooterTitleProps{
    content: string;
    style?: CSSProperties;
}

export function FooterTitle({content, style} : FooterTitleProps) {
return (
  <Container
    style={style}
  >
      {content}
  </Container>
)
}