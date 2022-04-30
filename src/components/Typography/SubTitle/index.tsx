
import  { BaseHTMLAttributes } from 'react';
import { SubTitle as SubTitleComponent } from './styles';

interface Props { }

interface SubTitleProps extends BaseHTMLAttributes<Props> {
  content: string;
  themeColor?: 'dark' | 'light';
}

export function SubTitle({ content, themeColor }: SubTitleProps) {
  return (
    <SubTitleComponent themeColor={themeColor}>
      {content}
    </SubTitleComponent>
  )
}