import { Code as CodeComponent } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container, Title } from './styles';

interface DisplayCodeProps{
    children: ReactNode
}

export function DisplayCode({children} : DisplayCodeProps) {
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