import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SignInForm } from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('SignInForm', () => {
    it('should render correctly', () => {
        render(
            <SignInForm
                formTitle='SignInForm-title'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('SignInForm-submit-button-title')
        expect(component).toBeTruthy()
    })
    it('should render GoogleSignInButton correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                githubSignInButtonTitle='githubsigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('githubsigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render GitHubSignInButton correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                facebookSignInButtonTitle='facebooksigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('facebooksigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render FaceookSignInButton correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                googleSignInButtonTitle='googlesigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('googlesigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render ForgotPasswordButton correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                forgotPasswordButtonTitle='forgotpasswordbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('forgotpasswordbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render FormSubtitle  correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                formSubtitle='formsubtitle-content'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('formsubtitle-content')
        expect(component).toBeInTheDocument()
    })
    it('should render FormAddtionalText   correctly', () => {
       render(
            <SignInForm
                formTitle='SignInForm-title'
                formAddtionalText ='formaddtionaltext-content'
                submit={async () => { }}
                submitButtonTitle='SignInForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('formaddtionaltext-content')
        expect(component).toBeInTheDocument()
    })
})