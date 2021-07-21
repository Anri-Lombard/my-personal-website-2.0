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
                    <h1>About page!!!</h1>
                    <section>This is about me with some animations as you scroll</section>
                    <section>Values: Learn, focus, help, smile... In that order</section>
                    <h3>Principle: Don't optimise for time, optimise for amount of attention
                        and value.
                    </h3>
                </div>
            </div>
        </Layout>
    )
}

// Link allows navigation without refreshing pages