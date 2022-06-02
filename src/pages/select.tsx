import { ChangeEvent, useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Select as SelectComponent } from '../components/Forms/Select'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Select() {

    const props = {
        options: 'Description: An array of {value: string, label: string}. Type: OptionsProps[]. Required.',
        selectPlaceholder: 'Description: A placeholder for disabled default option. Type: String. Required.',
        inputStyle: 'Description: Input style. Type: CSS Properties.',
        inputClassName: 'Description: Input className. Type: String.',
        optionsStyle: 'Description: Options style. Type: CSS Properties.',
        optionsClassName: 'Description: Options className. Type: String.',
    }

    const [selected, setSelected] = useState('')
   

    const options = [
        { value: 'chocolate', label: 'chocolate' },
        { value: 'cookies', label: 'cookies' },
        { value: 'potatoes', label: 'potatoes' },
    ]

    const handleChangeSelection = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
    }
    

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Select'
                    />
                    <Text
                        content='A styled e-mail input ready to be used containing all input attributes. It is responsible and has validations by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SelectComponent
                        name='foods'
                        options={options}
                        onChange={handleChangeSelection}
                        value={selected}
                        selectPlaceholder='Select an option'
                    />
                    <p
                        style={{marginTop: 16}}
                    >
                        {selected && `The selected option was: ${selected}`}
                    </p>
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const [selected, setSelected] = useState('')
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const handleChangeSelection = (e: ChangeEvent<HTMLSelectElement>) => {
                        setSelected(e.target.value)
                    }"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <SelectComponent
                    name='foods'
                    options={options}
                    onChange={handleChangeSelection}
                    value={selected}
                    selectPlaceholder='Select an option'
                />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}