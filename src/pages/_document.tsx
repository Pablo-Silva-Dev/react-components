import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="pablosilvadev criar site pablo silva dev pablosilvadev.com.br" />
                    <meta name="keywords" content="pablosilvadev criar sites catalogo virtual landing page" />
                    <meta name='author' content='pablosilvadev' />
                    <meta name='author' content='pablosilvadev' />
                    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600&family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}