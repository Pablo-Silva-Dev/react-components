import { screen, render, fireEvent } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { mocked } from 'ts-jest/utils'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { AuthenticationManager } from './'

interface ChildrenProps {
    children: ReactNode
}

jest.mock('next-auth/react')

const Provider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('AuthenticationManager', () => {
    it('should render correctly when user is not authenticated', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce({ data: null } as any)
        render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
            />,
            {
                wrapper: Provider
            }
        )
        const component = screen.getByText('SignIn')
        expect(component).toBeInTheDocument()

    })

    it('should render correctly when user is authenticated', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce(
            {
                data: {
                    user: {
                        name: 'John Doe',
                        email: 'johndoe@email.com',
                        image: '/'
                    },
                    expires: 'fake-expires'
                }
            } as any
        )
        render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
            />,
            {
                wrapper: Provider
            }
        )


        const component = screen.getByText('SignOut')
        expect(component).toBeInTheDocument()

    })

    it('should render showsUserPhoto correctly when user is authenticated', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce(
            {
                data: {
                    user: {
                        name: 'John Doe',
                        email: 'johndoe@email.com',
                        image: '/profile-picture.png'
                    },
                    expires: 'fake-expires'
                }
            } as any
        )
        render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
                showsUserPhoto
            />,
            {
                wrapper: Provider
            }
        )


        const component = screen.getByAltText('react-components')
        expect(component).toHaveAttribute('src')

    })

    it('should render authenticationFeedbackText correctly when user is authenticated', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValue(
            {
                data: {
                    user: { name: 'John Doe', email: 'johndoe@email.com' },
                    expires: 'fake-expires'
                }
            } as any
        )
        render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
                authenticationFeedbackText='Welcome'
            />,
            {
                wrapper: Provider
            }
        )

        const component = screen.getByText('Welcome')
        expect(component).toBeInTheDocument()

    })

    it('should call handleSignOut function when click in SignOutButton', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValue(
            {
                data: {
                    user: { name: 'John Doe', email: 'johndoe@email.com' },
                    expires: 'fake-expires'
                }
            } as any
        )

        const handleSignOut = jest.fn()

        const { container } = render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
                authenticationFeedbackText='Welcome'
                photoSize='small'
                signOut={handleSignOut}
            />,
            {
                wrapper: Provider
            }
        )

        const signOutButton = container.querySelector('[class="styles__SignOutButton-sc-c4zru4-1 lkvXSu"]')
        fireEvent.click(signOutButton!)
        expect(handleSignOut).toBeCalled()

    })
    it('should call handleSignIn function when click in SignIntButton', () => {

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValue(
            {
                data: null
            } as any
        )

        const handleSignIn = jest.fn()

        const { container } = render(
            <AuthenticationManager
                signInButtonTitle='SignIn'
                signOutButtonTitle='SignOut'
                authenticationFeedbackText='Welcome'
                photoSize='small'
                signIn={handleSignIn}
            />,
            {
                wrapper: Provider
            }
        )
        const signInButton = container.querySelector('[class="styles__SignInButton-sc-c4zru4-2 cUCMGo"]')
        fireEvent.click(signInButton!)
        expect(handleSignIn).toHaveBeenCalled()

    })
})
