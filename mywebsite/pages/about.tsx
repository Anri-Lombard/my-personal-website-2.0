// import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function about() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>About</title>
                <   link rel="icon" href="/favicon.ico" />
                </Head>

                <div>
                    <h1>Macro Compliance Tracker!</h1>
                    <p>
                        This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

// Link allows navigation without refreshing pages