import { useState } from 'react';
import { CheckBox } from '../components/Forms/CheckBox'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import { ComponentContainer, Container, DescriptionContainer, PreviewContainer, PropsContainer } from "../styles";

export default function Checkbox() {

    const props = {
        checked: `If is checked | Type: Boolean | Required: true.`,
        onChange: 'Callback when checked state changes | Type: Function | Required: true.'
    }

    const [checkBox, setCheckBox] = useState(false)

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Checkbox'
                    />
                    <Text
                        content='Used to confirm terms and check boolean types.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <CheckBox
                        checked={checkBox}
                        onChange={() => setCheckBox(!checkBox)}
                    />
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
            </ComponentContainer>
        </Container>
    )
}