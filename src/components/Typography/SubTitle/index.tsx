
import { CSSProperties } from 'react';
import { SubTitle as SubTitleComponent } from './styles';

interface SubTitleProps {
  content: string;
  style?: CSSProperties
}

export function SubTitle({ content, style }: SubTitleProps) {
  return (
    <SubTitleComponent style={style}>
      {content}
    </SubTitleComponent>
  )
}