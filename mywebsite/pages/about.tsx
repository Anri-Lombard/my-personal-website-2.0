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

                <div className="about-me">
                    <div className="about-me__section-1">
                        There's a whole awfull lot to <em>19 years</em> of smiles and fun, so there's too much
                        to to fill any single tale, but dr. Seuss is welcome to sum how I live up quickly: <em>"The
                        more you READ, the more you will KNOW. The more that you LEARN, the more places 
                        you'll GO."</em> <br />
                    </div>
                    <br />
                    <div className="about-me__section-2">
                        The true nature of this website is to <em>leave a whif of curiosity behind for anyone
                        who skims it,</em> and the hope is that it does just that. <br />
                        <br />
                        The site is built with <em>Next.js, typescript, bootstrap and scss - yes, that is it.</em>
                        To delve into building your own you need to <em>learn CSS, HTML, and javascript, preferably
                        with good tutorials, then get into documentatiot after quick runs through nextjs and 
                        scss videos.</em> <br />
                        <br />
                        It might look icky at the start, but <em>the more you build "the more you will KNOW..."</em>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// Link allows navigation without refreshing pages