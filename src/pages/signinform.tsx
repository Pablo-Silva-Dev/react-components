import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { DisplayCode } from '../components/Display/DisplayCode';
import { SignInForm as SignInFormComponent } from '../components/Forms/SignInForm';
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


interface SignInFormDataProps {
    email: string
    password: string
}

const handleSignIn: SubmitHandler<SignInFormDataProps> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    toast.success(`Logged as ${values.email}`)
}

const recoveryPassword = async () => {}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('Email required.').email('Email invalid'),
    password: yup.string().required('Password required')
})


export default function SignInForm() {

    const props = {
        formTitle: 'Description: Text to display as form title. Type: String. Required.',
        submitButtonTitle: 'Description: SubmitButton title. Type: String. Required',
        submit: 'Description: Function to invoke at form submit, the form validation runs here. Type: Async function. Required.',
        forgotPasswordButtonTitle: 'Description: ForgotPasswordButtonTitle title. Type: String.',
        formSubtitle: 'Description: Text to display as form subtitle. Type: String.',
        formAdditionalText: 'Description: Additional text to display on bottom form. Type: String.',
        githubSignInButtonTitle: 'Description: GitHubSignInButton title. Type: String.',
        googleSignInButtonTitle: 'Description: GoogleSignInButton title. Type: String.',
        facebookSignInButtonTitle: 'Description: FacebookSignInButton title. Type: String.',
        emailPlaceholder: 'Description: Placeholder for email input. Type: String.',
        passwordPlaceholder: 'Description: Placeholder for password input. Type: String.',
        passwordForget: 'Description: Function to invoke at click on forgotPasswordButton. Type: Async function.',
        signInWithGitHub: 'Description: Function to invoke at trying to sign in with GitHub. Type: Async function.',
        signInWithGoogle: 'Description: Function to invoke at trying to sign in with Google. Type: Async function.',
        signInWithFacebook: 'Description: Function to invoke at trying to sign in with Facebook. Type: Async function.',
        buttonsDisabled: 'Disables all buttons if true. Type: Boolean.',
        buttonsLoading: 'Displays loading indicator into all buttons if true. Type: Boolean.',
        emailErrorMessage: 'Description: Displays the message error linked to email input. Type: FieldError.',
        passwordErrorMessage: 'Description: Displays the message error linked to password input. Type: FieldError.',
        emailRegister: 'Description: Receives the function for email input validation. Type: UseFormRegisterReturn.',
        passwordRegister: 'Description: Receives the function for password input validation. Type: UseFormRegisterReturn.',
        formTitleClassName: 'Description: FormTitle className. Type: String.',
        formTitleStyle: 'Description: FormTitle style. Type: CSS Properties.',
        formSubTitleClassName: 'Description: FormSubTitle className. Type: String.',
        formSubTitleStyle: 'Description: FormSubTitle style. Type: CSS Properties.',
        formAdditionalTextClassName: 'Description: FormAdditionalText className. Type: String.',
        formAdditionalTextStyle: 'Description: FormAdditionalText style. Type: CSS Properties.',
        formContainerClassName: 'Description: FormContainer className. Type: String.',
        formContainerStyle: 'Description: FormContainer style. Type: CSS Properties.',
        submitButtonClassName: 'Description: SubmitButton className. Type: String.',
        submitButtonStyle: 'Description: SubmitButton style. Type: CSS Properties.',
        forgotPasswordButtonClassName: 'Description: forgotPasswordButton className. Type: String.',
        forgotPasswordButtonStyle: 'Description: forgotPasswordButton style. Type: CSS Properties.',
        githubSignInButtonClassName: 'Description: GitHubSignInButton className. Type: String.',
        githubSignInButtonStyle: 'Description: GitHubSignInButton style. Type: CSS Properties.',
        googleSignInButtonClassName: 'Description: GoogleSignInButton className. Type: String.',
        googleSignInButtonStyle: 'Description: GoogleSignInButton style. Type: CSS Properties.',
        facebookSignInButtonClassName: 'Description: FacebookSignInButton className. Type: String.',
        facebookSignInButtonStyle: 'Description: FacebookSignInButton style. Type: CSS Properties.',
        emailInputStyle: 'Description: EmailInput style. Type: CSS Properties.',
        emailInputClassName: 'Description: EmailInput className. Type: String.',
        passwordInputStyle: 'Description: PasswordInput style. Type: CSS Properties.',
        passwordInputClassName: 'Description: PasswordInput className. Type: String.',
    }

 
    const { register, handleSubmit, formState } = useForm<SignInFormDataProps>({
        resolver: yupResolver(signInFormSchema)
    })
  
    const [loading, setLoading] = useState(false)

    async function signIn() {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
            return () => clearTimeout(timer)
        }, 1000)
    }

    return (
        <Container>
            <>
            <Toaster
                position='bottom-center'
            />
            </>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SignInForm'
                    />
                    <Text
                        content='A complete sign in form with social authentication, own application authentication mechanism with form validation and recovery password option.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SignInFormComponent
                        formTitle='SignIn form'
                        submitButtonTitle='Sign In'
                        githubSignInButtonTitle='Sign In with GitHub'
                        googleSignInButtonTitle='Sign In with Google'
                        facebookSignInButtonTitle='Sign In with Facebook'
                        formSubtitle='Sign In to discover our features.'
                        formAdditionalText='Sign in'
                        emailPlaceholder='email'
                        passwordPlaceholder='your password'
                        buttonsLoading={loading}
                        buttonsDisabled={loading}
                        passwordForget={recoveryPassword}
                        forgotPasswordButtonTitle='Forgot my password'
                        emailErrorMessage={formState.errors.email}
                        passwordErrorMessage={formState.errors.password}
                        emailRegister={register('email')}
                        passwordRegister={register('password')}
                        submit={handleSubmit(handleSignIn)}
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
                    children="
                    interface SignInFormDataProps {
                        email: string
                        password: string
                    }
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const handleSignIn: SubmitHandler<SignInFormDataProps> = async (values) => {
                        await new Promise(resolve => setTimeout(resolve, 500))
                        toast.success(`Logged as ${values.email}`)
                    }
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const recoveryPassword = async () => {}
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const signInFormSchema = yup.object().shape({
                        email: yup.string().required('Email required.').email('Email invalid'),
                        password: yup.string().required('Password required')
                    })
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const { register, handleSubmit, formState } = useForm<SignInFormDataProps>({
                        resolver: yupResolver(signInFormSchema)
                    })
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const [loading, setLoading] = useState(false)"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    async function signIn() {
                        setLoading(true)
                        const timer = setTimeout(() => {
                            setLoading(false)
                            return () => clearTimeout(timer)
                        }, 1000)
                    }
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <SignInFormComponent
                    formTitle='SignIn form'
                    submitButtonTitle='Sign In'
                    githubSignInButtonTitle='Sign In with GitHub'
                    googleSignInButtonTitle='Sign In with Google'
                    facebookSignInButtonTitle='Sign In with Facebook'
                    formSubtitle='Sign In to discover our features.'
                    formAdditionalText='Sign in'
                    emailPlaceholder='email'
                    passwordPlaceholder='your password'
                    buttonsLoading={loading}
                    buttonsDisabled={loading}
                    passwordForget={recoveryPassword}
                    forgotPasswordButtonTitle='Forgot my password'
                    emailErrorMessage={formState.errors.email}
                    passwordErrorMessage={formState.errors.password}
                    emailRegister={register('email')}
                    passwordRegister={register('password')}
                    submit={handleSubmit(handleSignIn)}
                />
                "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}