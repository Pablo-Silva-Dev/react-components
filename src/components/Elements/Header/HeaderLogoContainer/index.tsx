import { ReactNode } from 'react';
import { Container } from './styles';

interface HeaderLogoContainerProps{
    children: ReactNode;
    
}

export function HeaderLogoContainer({children} : HeaderLogoContainerProps) {
return (
  <Container>
      {children}
  </Container>
)
}