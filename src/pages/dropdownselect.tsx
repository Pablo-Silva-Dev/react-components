import { DisplayCode } from '../components/Display/DisplayCode';
import { DropdownSelect as DropdownSelectComponent } from '../components/Elements/DropdownSelect'
import { NextLink } from '../components/Next/NextLink';
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function DropdownSelect() {

    const options = [
        'one', 'two', 'three'
    ]

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='DropdownSelect'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <DropdownSelectComponent
                        options={options}
                    />
                </PreviewContainer>
                <PropsContainer>
                    <NextLink
                        title='See oficial documentation.'
                        url='https://www.npmjs.com/package/react-dropdown'
                    />
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const options = [
                        'one', 'two', 'three'
                      ]
                    <DropdownSelectComponent
                    options={options}
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}