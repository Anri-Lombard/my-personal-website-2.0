import Layout from '../components/Layout'
import Head from 'next/head'

export default function about() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Recognitions</title>
                </Head>

                <div>
                    <h1>Awards</h1>
                    <em>This is not an exhaustive list, but it surely is exhausting</em>
                    <p>2 buttons to increase and reduce the accordian</p>
                    <h1>Experience</h1>
                    <p>password to show "superhero sidekick and MIB agent"</p>
                </div>
            </div>
        </Layout>
    )
}