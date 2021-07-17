import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <h1>About</h1>
        </Layout>
    )
}

// Link allows navigation without refreshing pages