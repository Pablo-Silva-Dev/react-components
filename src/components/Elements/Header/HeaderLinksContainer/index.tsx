import { ReactNode } from 'react';
import { Container } from './styles';

interface HeaderLinksContainerProps{
    children: ReactNode;
    
}

export function HeaderLinksContainer({children} : HeaderLinksContainerProps) {
return (
  <Container>
      {children}
  </Container>
)
}