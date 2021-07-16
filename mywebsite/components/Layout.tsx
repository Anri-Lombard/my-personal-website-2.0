import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Anri's Playground</title>
                <meta name="Anri's personal website" content="Anri's personal website" />
            </Head>
            <main>{children}</main>
        </>
    )
}