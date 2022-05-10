import React, { CSSProperties } from 'react';
import { MdEmail } from 'react-icons/md'
import {
    Container,
    Form,
    Input,
    SubmitButton,
    Title,
    Text,
    TitleContainer
} from './styles';


interface NewsletterCardProps {
    title: string
    subtitle?: string
    namePlaceholder: string
    emailPlaceholder: string
    submit: () => Promise<void>
    style?: CSSProperties
    inputStyle?: CSSProperties
    buttonStyle?: CSSProperties
    titleStyle?: CSSProperties
    subTitleStyle?: CSSProperties
}

export function NewsletterCard({
    title,
    subtitle,
    namePlaceholder,
    emailPlaceholder,
    submit,
    style,
    buttonStyle,
    inputStyle,
    titleStyle,
    subTitleStyle
}: NewsletterCardProps) {
    return (
        <Container
            style={style}
        >
            <TitleContainer>
                <Title
                    style={titleStyle}
                >
                    {title}
                </Title>
                <Text
                    style={subTitleStyle}
                >
                    {subtitle}
                </Text>
            </TitleContainer>
            <Form
                onSubmit={submit}
            >
                <Input
                    type='text'
                    name='name'
                    placeholder={namePlaceholder}
                    required
                    style={inputStyle}
                />
                <Input
                    type='email'
                    name='email'
                    placeholder={emailPlaceholder}
                    required
                    style={inputStyle}
                />
                <SubmitButton
                    type='submit'
                    style={buttonStyle}
                >
                    <MdEmail size={16} />
                    Submit
                </SubmitButton>
            </Form>

        </Container>
    )
}