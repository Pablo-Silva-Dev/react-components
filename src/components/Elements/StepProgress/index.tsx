import { MdCheck, } from 'react-icons/md'
import { useTheme } from 'styled-components';
import {
    Container,
    StepContainer,
    StepItem,
    StepLine,
    StepTitle
} from './styles';

interface TaskProps {
    process: string;
    status: string;
}

interface StepProgressProps {
    currentIndex: number;
    steps: TaskProps[]
}

export function StepProgress({
    steps,
    currentIndex
}: StepProgressProps) {

    const theme = useTheme()

    return (
        <Container
            key={currentIndex}
        >
            {steps.map((step, index) => (
                <StepContainer
                    key={step.process}
                >
                    <StepItem
                        style={{
                            background: currentIndex > index + 1 ?
                                theme.colors.success
                                :
                                theme.colors.primary
                            ,
                            width: currentIndex === index + 1 ?
                                '40px'
                                :
                                '24px',
                            height: currentIndex === index + 1 ?
                                '40px'
                                :
                                '24px'
                        }}
                    >
                        {
                            currentIndex < index + 2 ?
                                index + 1
                                :
                                <MdCheck />
                        }
                    </StepItem>
                    <StepTitle

                    >
                        {step.process}
                    </StepTitle>
                    {index < (steps.length - 1) &&
                        <StepLine
                            style={{
                                background: currentIndex > index + 1 ?
                                    theme.colors.success :
                                    theme.colors.primary,

                            }}
                        />
                    }
                </StepContainer>
            ))}

        </Container>
    )
}