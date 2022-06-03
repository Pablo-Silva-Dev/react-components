import { ChangeEvent, useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { TextArea as TextAreaComponent } from '../components/Forms/TextArea'
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

export default function TextArea() {

    const props = {
        showsCharactersCounting: 'Description: Display characters length validation if true. Type: Boolean. Default: true.',
        currentLength: 'Description: A number to show the current characters length. Type: Number.',
        maxCharacters: 'Description: Maximum text length allowed. Type: Number. Default: 120.',
    }

    const [text, setText] = useState('')

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='TextArea'
                    />
                    <Text
                        content='A custom HTML TextArea component with number of characters validation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TextAreaComponent
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                        showsCharactersCounting
                        currentLength={text.length}
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
                <DisplayCode
                    //eslint-disable-next-line
                    children="const [text, setText] = useState('')"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <TextArea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                    showsCharactersCounting
                    currentLength={text.length}
                />
                    "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}