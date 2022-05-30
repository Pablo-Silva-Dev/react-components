import { Code as CodeComponent } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container, Title } from './styles';

interface DisplayCodeProps {
    children: ReactNode;
    hideTitle?: boolean;
}

export function DisplayCode({ children, hideTitle }: DisplayCodeProps) {
    return (
        <Container>
            {
                !hideTitle &&
                <Title>Code</Title>
            }
            <CodeComponent
                //eslint-disable-next-line
                children={children}
                colorScheme='whiteAlpha'
            />
        </Container>
    )
}