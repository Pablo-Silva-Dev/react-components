import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface SubmitButtonProps {
    title: string;
    disabled: boolean;
    loading: boolean;
}

export function SubmitButton({
    title,
    disabled,
    loading,
}: SubmitButtonProps) {

    const theme = useTheme()

    return (
        <Container
            type='submit'
            disabled={disabled}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white}
                    height={40}
                    width={40}
                />
                :
                title
            }
        </Container>
    )
}