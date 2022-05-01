import React, { CSSProperties } from 'react';
import { Title as TitleComponent } from './styles';


interface TitleProps {
  content: string;
  style?: CSSProperties;
}

export function Title({ content, style }: TitleProps) {
  return (
    <TitleComponent
      style={style}
    >
      {content}
    </TitleComponent>
  )
}