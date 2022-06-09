import { CSSProperties } from 'react';
import { EmailInput } from '../EmailInput';
import { FacebookSignInButton } from '../FacebookSignInButton';
import { GitHubSignInButton } from '../GitHubSignInButton';
import { GoogleSignInButton } from '../GoogleSignInButton';
import { PasswordInput } from '../PasswordInput';
import { SubmitButton } from '../SubmitButton';
import {
    ButtonsContainer,
    Container,
    Divider, ForgotPasswordButton, SubTitle, Text, Title
} from './styles';

interface SignInFormProps {
    formTitle: string;
    formSubtitle?: string;
    formAddtionalText?: string;
    submitButtonTitle: string;
    googleSignInButtonTitle?: string;
    githubSignInButtonTitle?: string;
    facebookSignInButtonTitle?: string;
    forgotPasswordButtonTitle?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    passwordConfirmationPlaceholder?: string;
    submit: () => Promise<void>;
    passwordForget?: () => Promise<void>;
    signInWithGitHub?: () => Promise<void>;
    signInWithGoogle?: () => Promise<void>;
    signInWithFacebook?: () => Promise<void>;
    buttonsDisabled?: boolean;
    buttonsLoading?: boolean;
    formContainerStyle?: CSSProperties;
    formContainerClassName?: string;
}

export function SignInForm({
    formTitle,
    submitButtonTitle,
    forgotPasswordButtonTitle,
    submit,
    googleSignInButtonTitle,
    githubSignInButtonTitle,
    facebookSignInButtonTitle,
    googleSignInButtonStyle,
    githubSignInButtonStyle,
    facebookSignInButtonStyle,
    googleSignInButtonClassName,
    githubSignInButtonClassName,
    facebookSignInButtonClassName,
    passwordForget,
    signInWithFacebook,
    signInWithGoogle,
    signInWithGitHub,
    formAddtionalText,
    emailPlaceholder,
    passwordPlaceholder,
    passwordConfirmationPlaceholder,
    formSubtitle,
    buttonsDisabled,
    buttonsLoading,
    formContainerClassName,
    formContainerStyle
}: SignInFormProps) {

    return (
        <Container
            className={formContainerClassName}
            style={formContainerStyle}
        >
            <Title>{formTitle}</Title>
            <ButtonsContainer>
                {
                    googleSignInButtonTitle &&
                    <GoogleSignInButton
                        disabled={buttonsDisabled}
                        title={googleSignInButtonTitle}
                        onClick={signInWithGoogle}
                    />
                }
                {
                    githubSignInButtonTitle &&
                    <GitHubSignInButton
                        disabled={buttonsDisabled}
                        title={githubSignInButtonTitle}
                        onClick={signInWithGitHub}
                    />
                }
                {
                    facebookSignInButtonTitle &&
                    <FacebookSignInButton
                        disabled={buttonsDisabled}
                        title={facebookSignInButtonTitle}
                        onClick={signInWithFacebook}
                    />
                }
            </ButtonsContainer>
            {
                formSubtitle &&
                <>
                    <Divider />
                    <SubTitle>{formSubtitle}</SubTitle>
                </>
            }
            <EmailInput
                placeholder={emailPlaceholder}
            />
            <PasswordInput
                placeholder={passwordPlaceholder}
            />
            <PasswordInput
                placeholder={passwordConfirmationPlaceholder}
            />
            <SubmitButton
                title={submitButtonTitle}
                disabled={buttonsDisabled}
                onClick={submit}
                loading={buttonsLoading}
            />
            {
                forgotPasswordButtonTitle &&
                <ForgotPasswordButton
                    onClick={passwordForget}
                    disabled={buttonsDisabled}
                >
                    {
                        forgotPasswordButtonTitle
                    }
                </ForgotPasswordButton>
            }
            {formAddtionalText &&
                <Text>
                    {formAddtionalText}
                </Text>
            }
        </Container>
    )
}