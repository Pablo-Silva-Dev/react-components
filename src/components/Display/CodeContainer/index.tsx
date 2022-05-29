import { Code as CodeComponent } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container, Title } from './styles';

interface CodeContainerProps{
    children: ReactNode
}

export function CodeContainer({children} : CodeContainerProps) {
    return (
        <Container>
            <Title>Code</Title>
            <CodeComponent
                //eslint-disable-next-line
                children={children}
                colorScheme='whiteAlpha'
            />
        </Container>
    )
}