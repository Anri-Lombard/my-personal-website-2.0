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
                        There&apos;s a whole awful lot to <em>19 years</em> of smiles and fun, so there&apos;s too much
                        to fill any single tale, but dr. Seuss is welcome to quickly sum up how I live: <em>&quot;The
                        more you READ, the more you will KNOW. The more that you LEARN, the more places 
                        you&apos;ll GO.&quot;</em> <br />
                    </div>
                    <br />
                    <div className="about-me__section-2">
                        The true nature of this website is to <em>leave a whif of curiosity behind for anyone
                        who skims it,</em> and my professional passion is to delight you in small ways on every
                        interaction. <br />
                        <br />
                        The site is built with <em>Next.js, typescript, bootstrap and Animate.js - yes, that is it.</em>
                        It is hosted on a Next.js platform called <em><a href="https://vercel.com/">Vercel</a></em>.
                        To delve into building your own you need to <em>learn <a href="https://youtu.be/D-h8L5hgW-w">CSS, HTML</a>, and <a href="https://youtu.be/PkZNo7MFNFg">Javascript</a></em>
                        , then get into <em><a href="https://youtu.be/w7ejDZ8SWv8" className="animate__shakeY">Reactjs (prerequisite to nextjs)</a></em>. One more <em><a href="https://youtu.be/mTz0GXj8NN0">Next</a> and <a href="https://youtu.be/Zz6eOVaaelI">Sass</a></em> video,
                        then you can go straigt to the documentation to build by yourself. <br />
                        <br />
                        It might look icky at the start, but <em>the more you build &quot;the more you will KNOW...&quot;</em>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// Link allows navigation without refreshing pages