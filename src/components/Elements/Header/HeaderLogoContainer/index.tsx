import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface HeaderLogoContainerProps {
  children: ReactNode;
  logoContainerStyle?: CSSProperties;
  logoContainerClassName?: string;

}

export function HeaderLogoContainer({
  children,
  logoContainerStyle,
  logoContainerClassName
}: HeaderLogoContainerProps) {
  return (
    <Container
      style={logoContainerStyle}
      className={logoContainerClassName}
    >
      {children}
    </Container>
  )
}