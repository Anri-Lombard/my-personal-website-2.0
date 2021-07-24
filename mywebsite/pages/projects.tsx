import Layout from '../components/Layout'
import Head from 'next/head'

export default function projects() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Projects</title>
                </Head>

                <div className="projects">
                    <h1>Incorporate three.js project for them to use</h1>
                    <p>List all projects on billboard</p>
                    <p>Make it interactive and fun</p>
                </div>
            </div>
        </Layout>
    )
}