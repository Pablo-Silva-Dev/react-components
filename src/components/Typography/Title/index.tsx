import React from 'react';
import { Title as TitleComponent } from './styles';

interface TitleProps {
  content: string;
  themeColor?: "dark" | "light";
}

export function Title({ themeColor, content }: TitleProps) {
  return (
    <TitleComponent
      themeColor={themeColor}
    >
      {content}
    </TitleComponent>
  )
}