import { ChangeEvent, CSSProperties, SelectHTMLAttributes } from 'react';
import { SelectInput, Option } from './styles'

interface Props{}

interface OptionProps {
    value: string | number;
    label: string | number;
}

interface SelectProps extends SelectHTMLAttributes<Props>{
    options: OptionProps[];
    name: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    selectPlaceholder?: string;
    optionStyle?: CSSProperties;
}

export function Select({
    name,
    options,
    onChange,
    required,
    selectPlaceholder,
    optionStyle,
    ...rest
}: SelectProps) {
    return (
        (
            <SelectInput
                name={name}
                onChange={onChange}
                required={required}
                {...rest}
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