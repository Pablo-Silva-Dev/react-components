import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface SubmitButtonProps {
    title: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => Promise<void>;
}

export function SubmitButton({
    title,
    disabled,
    loading,
    onClick
}: SubmitButtonProps) {

    const theme = useTheme()

    return (
        <Container
            type='submit'
            disabled={disabled}
            data-testid='submit-button-test-id'
            onClick={onClick}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white}
                    height={40}
                    width={40}
                    data-testid='submit-button-children-test-id'
                />
                :
                title
            }
        </Container>
    )
}