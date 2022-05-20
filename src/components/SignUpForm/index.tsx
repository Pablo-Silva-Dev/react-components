import React from 'react';
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router'

import { Button, Container, LogoutButton } from './styles';



export function UserAuthentication() {

    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        return (
            <Container>
                <Image
                    src={session.user.image}
                    width={80}
                    height={80}
                    alt='PabloSilvaDev'
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
                    onClick={() => router.push('/autenticacao')}
                >
                    Fazer login
                </Button>
            </Container>
        )
    }


}