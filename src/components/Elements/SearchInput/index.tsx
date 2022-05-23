import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface Props { }

export default function SearchInput({ ...rest }: InputHTMLAttributes<Props>) {
    return (
        <Input
            {...rest}
        />
    )
}