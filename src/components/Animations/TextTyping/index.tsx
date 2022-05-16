import TypeAnimation from 'react-type-animation';
import { Container } from './styles';

interface TextTypingProps {
    wrapper: 'p' | 'h2'
    firstText: string;
    secondText?: string;
    thirdText?: string;
    fourthText?: string;
    firstTextDelay: number;
    secondTextDelay?: number;
    thirdTextDelay?: number;
    fourthTextDelay?: number;
    repeat?: number;
    showsCursor?: boolean;
    className?: string;
}

export function TextTyping({
    firstText,
    secondText,
    thirdText,
    fourthText,
    firstTextDelay,
    secondTextDelay,
    thirdTextDelay,
    fourthTextDelay,
    wrapper,
    repeat,
    showsCursor,
    className
}: TextTypingProps) {
    return (
        <Container>

            <TypeAnimation
                sequence={
                    [
                        firstText,
                        firstTextDelay,
                        secondText && secondText,
                        secondTextDelay && secondTextDelay,
                        thirdText && thirdText,
                        thirdTextDelay && thirdTextDelay,
                        fourthText && fourthText,
                        fourthTextDelay && fourthTextDelay,
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