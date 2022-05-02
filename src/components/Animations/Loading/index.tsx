import ReactLoading, { LoadingProps as ReactLoadingProps } from 'react-loading';
import { useTheme } from 'styled-components';

interface LoadingProps {
    size?: 'small' | 'medium' | 'large';
    type?: ReactLoadingProps['type']
}

export function Loading({ size, type }: LoadingProps) {

    const theme = useTheme()

    return (
        <ReactLoading
            type={type}
            color={theme.colors.primary}
            height={size === 'large' ? 72 : size === 'small' ? 40 : 56}
            width={size === 'large' ? 72 : size === 'small' ? 40 : 56}
        />
    )
}