import TypeAnimation from 'react-type-animation';
import { Container } from './styles';

interface TextTypingProps {
    wrapper: 'p' | 'h2'
    firstText: string;
    finalText: string;
    secondText?: string;
    thirdText?: string;
    fourthText?: string;
    repeat?: number | 'infinity';
    delay?: number;
    showsCursor?: boolean;
    className?: string;
}

export function TextTyping({
    firstText,
    finalText,
    secondText,
    thirdText,
    fourthText,
    wrapper,
    repeat,
    delay,
    showsCursor,
    className
}: TextTypingProps) {
    return (
        <Container>

            <TypeAnimation
                sequence={
                    [
                        firstText,
                        secondText && secondText,
                        thirdText && thirdText,
                        fourthText && fourthText,
                        delay,
                        finalText
                    ]
                }
                wrapper={wrapper}
                className={className}
                cursor={showsCursor}
                repeat={repeat}
            />
        </Container>
    );
};