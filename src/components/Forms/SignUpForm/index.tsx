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
    Divider,
    SubTitle,
    Title,
    Text,
    ForgotPasswordButton
} from './styles';

interface SignUpFormProps {
    formTitle: string;
    formSubtitle?: string;
    formAddtionalText?: string;
    submitButtonTitle: string;
    googleSignInButtonTitle: string;
    githubSignInButtonTitle: string;
    facebookSignInButtonTitle: string;
    forgotPasswordButtonTitle: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    passwordConfirmationPlaceholder?: string;
    submit: () => Promise<void>;
    passwordForget?: () => Promise<void>;
    signInWithGitHub?: () => Promise<void>;
    signInWithGoogle?: () => Promise<void>;
    signInWithFacebook?: () => Promise<void>;
    socialButtonsColorScheme?: 'light' | 'dark'
    buttonsDisabled?: boolean;
    buttonsLoading?: boolean;
    style?: CSSProperties;
    className?: string;
}

export function SignUpForm({
    formTitle,
    submitButtonTitle,
    forgotPasswordButtonTitle,
    submit,
    googleSignInButtonTitle,
    githubSignInButtonTitle,
    facebookSignInButtonTitle,
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
    socialButtonsColorScheme,
    className,
    style
}: SignUpFormProps) {

    return (
        <Container
            className={className}
            style={style}
        >
            <Title>{formTitle}</Title>
            <ButtonsContainer>
                {
                    googleSignInButtonTitle &&
                    <GoogleSignInButton
                        disabled={buttonsDisabled}
                        title={googleSignInButtonTitle}
                        themeColor={socialButtonsColorScheme}
                        onClick={signInWithGoogle}
                    />
                }
                {
                    githubSignInButtonTitle &&
                    <GitHubSignInButton
                        disabled={buttonsDisabled}
                        title={githubSignInButtonTitle}
                        themeColor={socialButtonsColorScheme}
                        onClick={signInWithGitHub}
                    />
                }
                {
                    facebookSignInButtonTitle &&
                    <FacebookSignInButton
                        disabled={buttonsDisabled}
                        title={facebookSignInButtonTitle}
                        themeColor={socialButtonsColorScheme}
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