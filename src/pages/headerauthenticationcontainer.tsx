import { useSession, signIn, signOut } from 'next-auth/react';
import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { AuthenticationManager } from '../components/Elements/AuthenticationManager';
import {
    HeaderAuthenticationContainer as HeaderAuthenticationUserContainerComponent
} from '../components/Elements/Header/HeaderAuthenticationContainer';
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

export default function HeaderAuthenticationUserContainer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: HeaderAuthenticationUserContainer style. Type: CSS Properties.',
        className: 'Description: HeaderAuthenticationUserContainer className. Type: String.'

    }

    const theme = useTheme()

    const session = useSession()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='HeaderAuthenticationUserContainer'
                    />
                    <Text
                        content='Used to display AuthenticationUser on header.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderAuthenticationUserContainerComponent
                        style={{
                            backgroundColor: theme.colors.primary,
                            padding: 12
                        }}
                    >
                        <AuthenticationManager
                            signInButtonTitle='Sign in'
                            authenticationFeedbackText={
                                session?.data ?
                                    `Hello ${session!.data!.user!.name}!`
                                    : 'You are not authenticated.'}
                            showsUserPhoto
                            signIn={() => signIn('github')}
                            signOut={signOut}
                            signOutButtonTitle='Sign out'
                        />
                    </HeaderAuthenticationUserContainerComponent >
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
                    <HeaderAuthenticationUserContainerComponent
                        style={{
                            backgroundColor: theme.colors.primary,
                            padding: 12
                        }}
                    >
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
                    </HeaderAuthenticationUserContainerComponent >
                    "
                />
            </ComponentContainer>
        </Container>
    )
}