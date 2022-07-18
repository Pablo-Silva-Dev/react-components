import { ReactElement } from 'react';
import { Container, SubContainer } from './styles';

//WORKS FINE WITH 14 ELEMENTS

interface SoftSliderProps {
  children: ReactElement[];
  animationSpeed?: number;
}

export function SoftSlider({ children, animationSpeed }: SoftSliderProps) {
  return (
    <Container>
      <SubContainer animationSpeed={animationSpeed}>
        {children}
      </SubContainer>
    </Container>
  )
}
