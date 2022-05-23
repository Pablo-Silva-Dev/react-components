import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import {FaUser} from 'react-icons/fa'
import { useTheme } from 'styled-components';

import { Button, Container, LogoutButton } from './styles';

interface UserAuthenticationProps {
    redirectPath: string;
    imageAlt: string;
}

export function UserAuthentication({
    redirectPath,
    imageAlt
}: UserAuthenticationProps) {

    const { data: session } = useSession()
    const router = useRouter()
    const theme = useTheme()

    if (session) {
        return (
            <Container>
                <Image
                    src={session.user.image}
                    width={80}
                    height={80}
                    alt={imageAlt}
                    style={{
                        borderRadius: 48
                    }}
                />
                <LogoutButton
                    onClick={() => signOut()}
                >
                    Sair
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
                >
                    Fazer login
                </Button>
            </Container>
        )
    }


}