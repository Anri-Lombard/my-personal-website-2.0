// import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function about() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>About</title>
                </Head>

                <div>
                    <h1>Tap "I am a developer": This website's code is as DRY as it gets</h1>
                    <section>This is about me with some animations as you scroll</section>
                    <section>Values: Learn, focus, help, smile... In that order</section>
                    <h3>Principle: Don't optimise for time, optimise for amount of attention
                        and value.
                    </h3>
                    <h3>This website is so custom that there is no framework to mimic it</h3>
                    <h3>Tech used for it: ...</h3>

                    <h4>Links: Linkedin, github, twitter (add codeforces later on)</h4>
                    <p>I use twitter to share what I have learned and build a network of people</p>
                </div>
            </div>
        </Layout>
    )
}

// Link allows navigation without refreshing pages