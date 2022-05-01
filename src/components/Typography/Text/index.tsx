
import { CSSProperties } from 'react';
import { Text as TextComponent } from './styles';

interface TextProps {
  content: string;
  style?: CSSProperties
}

export function Text({ content, style }: TextProps) {
  return (
    <TextComponent style={style}>
      {content}
    </TextComponent>
  )
}