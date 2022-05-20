import React, { CSSProperties } from 'react';
import { EmailInput } from '../EmailInput';
import { FacebookSignButton } from '../FacebookSignButton';
import { GitHubSignButton } from '../GitHubSignButton';
import { GoogleSignButton } from '../GoogleSignButton';
import { PasswordInput } from '../PasswordInput';
import { SubmitButton } from '../SubmitButton';
import {
    ButtonsContainer,
    Container,
    Divider,
    SubTitle,
    Title,
    Text,
    ForgotPasswordButton
} from './styles';

interface SignUpFormProps {
    title: string;
    submitButtonTitle: string;
    forgotPasswordButtonTitle?: string;
    addtionalText?: string;
    submit: () => Promise<void>;
    subtitle?: string;
    className?: string;
    style?: CSSProperties;
}

export function SignUpForm({
    title,
    submitButtonTitle,
    forgotPasswordButtonTitle,
    submit,
    addtionalText,
    subtitle,
    className,
    style
}: SignUpFormProps) {
    return (
        <Container
            className={className}
            style={style}
        >
            <Title>{title}</Title>
            <ButtonsContainer>
                <GitHubSignButton
                    disabled={false}
                    loading={false}
                    title='Entrar com o GitHub'
                    themeColor='light'
                    onClick={async () => { }}
                />
                <FacebookSignButton
                    disabled={false}
                    loading={false}
                    title='Entrar com o Facebook'
                    themeColor='light'
                    onClick={async () => { }}
                />
                <GoogleSignButton
                    disabled={false}
                    loading={false}
                    title='Entrar com o Google'
                    themeColor='light'
                    onClick={async () => { }}
                />
            </ButtonsContainer>
            <Divider />
            <SubTitle>{subtitle}</SubTitle>
            <EmailInput
                placeholder='Email'
                required
            />
            <PasswordInput
                placeholder='Senha'
                required
            />
            <PasswordInput
                placeholder='Confirmação de senha'
            />
            <SubmitButton
                title={submitButtonTitle}
                onClick={submit}
            />

            <ForgotPasswordButton>
                {forgotPasswordButtonTitle}
            </ForgotPasswordButton>
            {addtionalText &&
                <Text>
                    {addtionalText}
                </Text>
            }
        </Container>
    )
}