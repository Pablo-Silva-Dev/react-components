import Checkbox from 'rc-checkbox';

interface CheckboxProps {
    checked: boolean
    onChange: () => void;
}

export function CheckBox({
    checked,
    onChange,
}: CheckboxProps) {
    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
        />

    )
}