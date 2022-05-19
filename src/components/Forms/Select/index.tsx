import { ChangeEvent, CSSProperties } from 'react';
import { SelectInput, Option } from './styles'

interface OptionProps {
    value: string | number;
    label: string | number;
}

interface SelectProps {
    options: OptionProps[];
    name: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    selectPlaceholder?: string;
    style?: CSSProperties;
    optionStyle?: CSSProperties;
}

export function Select({
    name,
    options,
    onChange,
    disabled,
    selectPlaceholder,
    style,
    optionStyle
}: SelectProps) {
    return (
        (
            <SelectInput
                name={name}
                onChange={onChange}
                style={style}
                disabled={disabled}
            >
                {
                    selectPlaceholder &&
                    <Option selected disabled>{selectPlaceholder}</Option>
                }
                {options.map(opt => (
                    <Option key={opt.value} value={opt.label}
                        style={optionStyle}
                    >
                        {opt.label}
                    </Option>
                ))}
            </SelectInput>
        )
    )
}