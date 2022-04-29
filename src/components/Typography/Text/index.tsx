
import React, { BaseHTMLAttributes } from 'react';
import { Text as TextComponent } from './styles';

interface Props { }

interface TextProps extends BaseHTMLAttributes<Props> {
  content: string;
  themeColor?: 'dark' | 'light';
}

export function Text({ content, themeColor, ...rest }: TextProps) {
  return (
    <TextComponent themeColor={themeColor} {...rest}>
      {content}
    </TextComponent>
  )
}