import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { DisplayCode } from '../components/Display/DisplayCode';
import { SignUpForm as SignUpFormComponent } from '../components/Forms/SignUpForm';
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


interface SignUpFormDataProps {
    name: string;
    email: string
    password: string
    confirmPassword: string
}

const handleSignUp: SubmitHandler<SignUpFormDataProps> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    toast.success(`Registered with success as ${values.email}.`)
}

const SignUpFormSchema = yup.object().shape({
    name: yup.string().required('Name required.'),
    email: yup.string().required('Email required.').email('Email invalid'),
    password: yup.string().required('Password required'),
    confirmPassword: yup.string().required('Password confirmation required').oneOf([yup.ref('password')], 'Password must match'),
})


export default function SignUpForm() {

    const props = {
        formTitle: 'Description: Text to display as form title. Type: String. Required.',
        submitButtonTitle: 'Description: SubmitButton title. Type: String. Required',
        submit: 'Description: Function to invoke at form submit, the form validation runs here. Type: Async function. Required.',
        formSubtitle: 'Description: Text to display as form subtitle. Type: String.',
        formAdditionalText: 'Description: Additional text to display on bottom form. Type: String.',
        emailPlaceholder: 'Description: Placeholder for email input. Type: String.',
        passwordPlaceholder: 'Description: Placeholder for password input. Type: String.',
        confirmPasswordPlaceholder: 'Description: Placeholder for confirm password input. Type: String.',
        buttonsDisabled: 'Disables all buttons if true. Type: Boolean.',
        buttonsLoading: 'Displays loading indicator into all buttons if true. Type: Boolean.',
        emailErrorMessage: 'Description: Displays the message error linked to email input. Type: FieldError.',
        passwordErrorMessage: 'Description: Displays the message error linked to password input. Type: FieldError.',
        confirmPasswordErrorMessage: 'Description: Displays the message error linked to confirm password input. Type: FieldError.',
        emailRegister: 'Description: Receives the function for email input validation. Type: UseFormRegisterReturn.',
        passwordRegister: 'Description:  Receives the function for password confirmation input validation. Type: UseFormRegisterReturn.',
        confirmPasswordRegister: 'Description: Receives the function for password input validation. Type: UseFormRegisterReturn.',
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
        emailInputStyle: 'Description: EmailInput style. Type: CSS Properties.',
        emailInputClassName: 'Description: EmailInput className. Type: String.',
        passwordInputStyle: 'Description: PasswordInput and ConfirmPasswordInput style. Type: CSS Properties.',
        passwordInputClassName: 'Description: PasswordInput and ConfirmPasswordInput className. Type: String.',
    }


    const { register, handleSubmit, formState } = useForm<SignUpFormDataProps>({
        resolver: yupResolver(SignUpFormSchema)
    })


    return (
        <Container>
            <div>
                <Toaster
                    position='bottom-center'
                />
            </div>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='SignUpForm'
                    />
                    <Text
                        content='A complete sign up form with form validation.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <SignUpFormComponent
                        formTitle='SignUp form'
                        submitButtonTitle='Sign Up'
                        formAdditionalText='Sign Up'
                        namePlaceholder='your name'
                        emailPlaceholder='your email'
                        passwordPlaceholder='your password'
                        confirmPasswordPlaceholder='password confirmation'
                        nameErrorMessage={formState.errors.name}
                        emailErrorMessage={formState.errors.email}
                        passwordErrorMessage={formState.errors.password}
                        confirmPasswordErrorMessage={formState.errors.confirmPassword}
                        nameRegister={register('name')}
                        emailRegister={register('email')}
                        passwordRegister={register('password')}
                        confirmPasswordRegister={register('confirmPassword')}
                        submit={handleSubmit(handleSignUp)}
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
                    interface SignUpFormDataProps {
                        name: string;
                        email: string
                        password: string
                        confirmPassword: string
                    }
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const handleSignUp: SubmitHandler<SignUpFormDataProps> = async (values) => {
                        await new Promise(resolve => setTimeout(resolve, 500))
                        toast.success(`Registered with success as ${values.email}.`)
                    }
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    const SignUpFormSchema = yup.object().shape({
                        name: yup.string().required('Name required.'),
                        email: yup.string().required('Email required.').email('Email invalid'),
                        password: yup.string().required('Password required'),
                        confirmPassword: yup.string().required('Password confirmation required').oneOf([yup.ref('password')], 'Password must match'),
                    })
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children=" const { register, handleSubmit, formState } = useForm<SignUpFormDataProps>({
                        resolver: yupResolver(SignUpFormSchema)
                    })
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <SignUpFormComponent
                        formTitle='SignUp form'
                        submitButtonTitle='Sign Up'
                        formAdditionalText='Sign Up'
                        emailPlaceholder='your email'
                        nameErrorMessage={formState.errors.name}
                        nameRegister={register('name')}
                        namePlaceholder='your name'
                        passwordPlaceholder='your password'
                        confirmPasswordPlaceholder='password confirmation'
                        emailErrorMessage={formState.errors.email}
                        passwordErrorMessage={formState.errors.password}
                        confirmPasswordErrorMessage={formState.errors.confirmPassword}
                        confirmPasswordRegister={register('confirmPassword')}
                        emailRegister={register('email')}
                        passwordRegister={register('password')}
                        submit={handleSubmit(handleSignUp)}
                    />
                "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
