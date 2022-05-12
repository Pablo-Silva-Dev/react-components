import Switch, { ReactSwitchProps } from 'react-switch';
import { useTheme } from 'styled-components';

export function Switcher({ ...rest }: ReactSwitchProps) {

    const theme = useTheme()

    return (
        <Switch
            {...rest}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={theme.colors.primary}
            height={14}
            width={40}
        />
    )
}