import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { SignUpForm } from './'

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
                formTitle='signupform-title'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('signupform-submit-button-title')
        expect(component).toBeTruthy()
    })
    it('should render GoogleSignInButton correctly', () => {
       render(
            <SignUpForm
                formTitle='signupform-title'
                githubSignInButtonTitle='githubsigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
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
                formTitle='signupform-title'
                facebookSignInButtonTitle='facebooksigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
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
                formTitle='signupform-title'
                googleSignInButtonTitle='googlesigninbutton-title'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
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
                formTitle='signupform-title'
                forgotPasswordButtonTitle='forgotpasswordbutton-title'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
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
                formTitle='signupform-title'
                formSubtitle='formsubtitle-content'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
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
                formTitle='signupform-title'
                formAddtionalText ='formaddtionaltext-content'
                submit={async () => { }}
                submitButtonTitle='signupform-submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('formaddtionaltext-content')
        expect(component).toBeInTheDocument()
    })
})