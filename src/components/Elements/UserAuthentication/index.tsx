import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { CSSProperties } from 'react';
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'styled-components';
import { name } from '../../../../package.json'

import { Button, Container, LogoutButton } from './styles';

interface UserAuthenticationProps {
    redirectPath: string;
    logOutButtonTitle: string;
    logInButtonTitle: string;
    className?: string;
    style?: CSSProperties;
    logOutButtonClassName?: string;
    logOutButtonStyle?: CSSProperties;
    logInButtonStyle?: CSSProperties;
    logInButtonClassName?: string;
}

export function UserAuthentication({
    redirectPath,
    logOutButtonTitle,
    logInButtonTitle,
    style,
    className,
    logInButtonStyle,
    logOutButtonClassName,
    logOutButtonStyle,
    logInButtonClassName
}: UserAuthenticationProps) {

    const { data: session } = useSession()
    const router = useRouter()
    const theme = useTheme()

    if (session) {
        return (
            <Container
                style={style}
                className={className}
            >
                <Image
                    src={session.user.image}
                    width={80}
                    height={80}
                    alt={name}
                    style={{
                        borderRadius: 48
                    }}
                />
                <LogoutButton
                    onClick={() => signOut()}
                    style={logOutButtonStyle}
                    className={logOutButtonClassName}
                >
                    {logOutButtonTitle}
                </LogoutButton>
            </Container>
        )

    } else {

        return (
            <Container>
                <FaUser
                    color={theme.colors.white}
                />
                <Button
                    onClick={() => router.push(`${redirectPath}`)}
                    style={logInButtonStyle}
                    className={logInButtonClassName}
                >
                    {logInButtonTitle}
                </Button>
            </Container>
        )
    }


}