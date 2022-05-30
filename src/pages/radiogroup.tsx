import { useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { RadioGroup as RadioGroupComponent } from '../components/Forms/RadioGroup';
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

export default function RadioGroup() {

    const props = {
        options: 'Array of options. Type: {value: string, label: string}[]. Required.',
        onChange: 'Function invoked at chaning. Type: Function. Required.',
        style: 'Description: Input style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.',
        labelStyle: 'Description: Label style. Type: CSS Properties.',
        labelClassName: 'Description: ClassName. Type: String.'
    }

    const options = [
        { value: 'chocolate', label: 'chocolate' },
        { value: 'cherry', label: 'cherry' },
        { value: 'apple', label: 'apple' },
    ]

    const [selectedOption, setSelectedOption] = useState('')

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='RadioGroup'
                    />
                    <Text
                        content='Used to confirm terms and check boolean types.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <RadioGroupComponent
                        options={options}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <p>{selectedOption}</p>
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
                    const options = [
                        { value: 'chocolate', label: 'chocolate' },
                        { value: 'cherry', label: 'cherry' },
                        { value: 'apple', label: 'apple' },
                    ]"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <RadioGroup
                    options={options}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}