import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { GetStaticProps } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';

// Posts data
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }: {allPostsData: { date: string, title: string, id: string }[]}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <body>
        <section className="section-1">
          <blockquote className="blockquote text-center">
            <p>
              “Oh, you can’t help that,” said the Cat: “we’re all mad here. I’m mad. You’re mad.” 
              “How do you know I’m mad?” said Alice. “You must be,” said the Cat, or you wouldn’t 
              have come here.”

            </p>
            <footer className="blockquote-footer">
              <cite title="Alice in Wonderland">
                A famous book about a rabbit hole
              </cite>
            </footer>
          </blockquote>

        </section>
        <section className="text-center section-2">
          <h2>Welcome anyway, feel free to <span id="changing"></span></h2>

        </section>
        <section className="section-3">
          <p>
            This is something coool I say about something interesting on why I built this
            website and what I find curious, then there is an animated page you could remove
            to see something more interesting
          </p>

        </section>
      </body>
    </Layout>
  )
}