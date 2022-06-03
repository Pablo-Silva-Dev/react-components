import { TextareaHTMLAttributes } from 'react';
import { Container, Counter, TextAreaElement } from './styles';

interface Props { }

interface TextAreaProps extends TextareaHTMLAttributes<Props> {
    showsCharactersCounting?: boolean;
    currentLength?: number;
    maxCharacters?: number;
}

export function TextArea({
    showsCharactersCounting,
    currentLength,
    maxCharacters = 120,
    ...rest
}: TextAreaProps) {
    return (
        <Container>
            <TextAreaElement
                maxLength={maxCharacters}
                {...rest}
            />
            <Counter> {currentLength} / {maxCharacters}</Counter>
        </Container>
    )
}