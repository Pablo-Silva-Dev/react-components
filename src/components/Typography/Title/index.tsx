import React, { BaseHTMLAttributes } from 'react';
import { Title as TitleComponent } from './styles';

interface Props { }

interface TitleProps extends BaseHTMLAttributes<Props> {
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