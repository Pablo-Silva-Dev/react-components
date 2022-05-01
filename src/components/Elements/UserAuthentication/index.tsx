import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router'

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
                <Button
                    onClick={() => router.push(`${redirectPath}`)}
                >
                    Fazer login
                </Button>
            </Container>
        )
    }


}