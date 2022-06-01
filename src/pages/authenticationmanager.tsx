import { signIn, signOut, useSession } from 'next-auth/react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { AuthenticationManager as AuthenticationManagerComponent } from '../components/Elements/AuthenticationManager';
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


export default function AuthenticationManager() {

    const props = {
        signIn: 'Description: Function to invoke to sign in. Type: (provider?: string) => void. Required.',
        signOut: 'Description: Function to invoke to sign out. Type: Function. Required.',
        signInButtonTitle: 'Description: SignInButton title. Type: String. Required.',
        signOutButtonTitle: 'Description: SignOutButton title. Type: String. Required.',
        authenticationFeedbackText: 'Description: A feedback message to user about his authentication. Type: String.',
        signInButtonClassName: 'Description: SignInButton className. Type: String.',
        signInButtonStyle: 'Description: SignInButton className. Type: CSSProperties.',
        signOutButtonClassName: 'Description: SignOutButton className. Type: String.',
        signOutButtonStyle: 'Description: SignOutButton className. Type: CSSProperties.',
        showsUserPhoto: 'Description: Return user email if true. Type: Boolean.',
        photoSize: 'Description: Image size. Type: "small" | "medium" | "large". Default: "medium".',
        containerStyle: 'Description: Container style. Type: CSS Properties.',
        containerClassName: 'Description: Container className. Type: String.',
        authenticationFeedbackTextStyle: 'Description: AuthenticationFeedback style. Type: CSS Properties.',
        authenticationFeedbackTextClassName: 'Description: AuthenticationFeedback className. Type: String.',
        children: 'Description: A space to render some Icon or SVG. Type: ReactNode.'
    }


    const session = useSession()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='AuthenticationManager'
                    />
                    <Text
                        content='Used to basically manage user authentication.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <AuthenticationManagerComponent
                        signInButtonTitle='Sign in'
                        authenticationFeedbackText={
                            session?.data ?
                                `Hello ${session?.data?.user.name}!`
                                : 'You are not authenticated.'}
                        showsUserPhoto
                        signIn={() => signIn('github')}
                        signOut={signOut}
                        signOutButtonTitle='Sign out'
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
                    <AuthenticationManager
                        signInButtonTitle='Sign in'
                        authenticationFeedbackText={
                            session?.data ?
                                `Hello ${session?.data?.user.name}!`
                                : 'You are not authenticated.'}
                        showsUserPhoto
                        signIn={() => signIn('github')}
                        signOut={signOut}
                        signOutButtonTitle='Sign out'
                     />
                "
                />
            </ComponentContainer>
        </Container>
    )
}