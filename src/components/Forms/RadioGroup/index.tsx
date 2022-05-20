import { ChangeEvent, CSSProperties } from "react";
import {
    ItemContainer,
    RadioButton,
    RadioButtonLabel,
    Container,
    Option
} from "./styles";

interface OptionProps {
    value: string | number;
    label: string | number;
}

interface RadioGroupProps {
    checked: boolean;
    options: OptionProps[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    style?: CSSProperties;
    className?: string;
}

export function RadioGroup({
    checked,
    name,
    options,
    onChange,
    style,
    className,
    labelStyle,
    labelClassName
}: RadioGroupProps) {

    return (
        <Container
            style={style}
            className={className}
        >
            {options.map(opt => (
                <ItemContainer
                    key={opt.value}
                >
                    <RadioButton
                        type="radio"
                        name={name}
                        value={opt.value}
                        checked={checked}
                        onChange={onChange}
                    />
                    <RadioButtonLabel />
                    <Option
                        style={labelStyle}
                        className={labelClassName}
                    >
                        {opt.label}
                    </Option>
                </ItemContainer>
            ))}

        </Container>
    );
};