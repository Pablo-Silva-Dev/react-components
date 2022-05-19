import { TextareaHTMLAttributes } from 'react';
import { TextAreaElement } from './styles';

interface Props { }

export function TextArea({ ...rest }: TextareaHTMLAttributes<Props>) {
    return (
        <TextAreaElement
            {...rest}
        />
    )
}