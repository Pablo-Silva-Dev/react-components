import { ChangeEvent, useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Switcher as SwitcherComponent } from '../components/Forms/Switcher'
import { NextLink } from '../components/Next/NextLink';
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

export default function Switcher() {

    const props = {
        options: 'Description: An array of {value: string, label: string}. Type: OptionsProps[]. Required.',
        SwitcherPlaceholder: 'Description: A placeholder for disabled default option. Type: String. Required.',
        inputStyle: 'Description: Input style. Type: CSS Properties.',
        inputClassName: 'Description: Input className. Type: String.',
        optionsStyle: 'Description: Options style. Type: CSS Properties.',
        optionsClassName: 'Description: Options className. Type: String.',
    }

    const [value, setValue] = useState(false)


    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Switcher'
                    />
                    <Text
                        content='A custom switch to lead with boolean values.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SwitcherComponent
                        checked={value}
                        onChange={() => setValue(!value)}
                    />
                    <p
                        style={{ marginTop: 16 }}
                    >
                        {value ? 'Switcher checked.' : 'Switcher unchecked.'}
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
                    <NextLink
                        title='See official React Switch documentation.'
                        url='https://www.npmjs.com/package/react-switch'
                    />
                   
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const [value, setValue] = useState(false)
                    "
                />

                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Switcher
                      checked={value}
                      onChange={() => setValue(!value)}
                    />
                "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}