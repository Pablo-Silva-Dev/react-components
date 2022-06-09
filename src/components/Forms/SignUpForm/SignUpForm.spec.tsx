import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SignUpForm } from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('SignUpForm', () => {
    it('should render correctly', () => {
        render(
            <SignUpForm
                formTitle='SignUpForm-title'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('SignUpForm-submit-button-title')
        expect(component).toBeTruthy()
    })
    it('should render GoogleSignInButton correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                githubSignInButtonTitle='githubsigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('githubsigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render GitHubSignInButton correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                facebookSignInButtonTitle='facebooksigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('facebooksigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render FaceookSignInButton correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                googleSignInButtonTitle='googlesigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('googlesigninbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render ForgotPasswordButton correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                forgotPasswordButtonTitle='forgotpasswordbutton-title'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('forgotpasswordbutton-title')
        expect(component).toBeInTheDocument()
    })
    it('should render FormSubtitle  correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                formSubtitle='formsubtitle-content'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('formsubtitle-content')
        expect(component).toBeInTheDocument()
    })
    it('should render FormAddtionalText   correctly', () => {
       render(
            <SignUpForm
                formTitle='SignUpForm-title'
                formAdditionalText='formaddtionaltext-content'
                submit={async () => { }}
                submitButtonTitle='SignUpForm-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('formaddtionaltext-content')
        expect(component).toBeInTheDocument()
    })
})