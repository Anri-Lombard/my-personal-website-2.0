import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { GetStaticProps } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {useState} from 'react'
import Image from 'next/image'

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
  const [toggleSeriousness, setToggleSeriousness] = useState(true);

  function toggleHandler() {
    setToggleSeriousness(!toggleSeriousness);
  }


  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <body>
        <section className="section-1">
          <blockquote className="blockquote text-center">
            <span className="section-1-cat">
              <Image width={150} height={150} src='/images/alicecat.png' alt="Picture of Alice" />
            </span>
            <p>
              &quot;Oh, you can’t help that,” said the Cat: &quot;we’re all mad here. I’m mad. You’re mad.” 
              &quot;How do you know I’m mad?” said Alice. &quot;You must be,” said the Cat, &quot;or you wouldn’t 
              have come here.&quot;

            </p>
            <footer style={{color: "white"}} className="blockquote-footer">
              <cite title="Alice in Wonderland">
                A famous book about a rabbit hole
              </cite>
            </footer>
          </blockquote>

        </section>
        <header className="ms-header">
          <h1 className="ms-header__title">
            You&apos;re welcome to
            <div className="ms-slider m-3">
              <ul className="ms-slider__words">
                <li className="ms-slider__word"> stay</li>
                <li className="ms-slider__word"> enjoy</li>
                <li className="ms-slider__word"> inspire</li>
                <li className="ms-slider__word"> admire</li>
                <li className="ms-slider__word"> stay</li>
              </ul>
            </div>
          </h1>
        </header>
        <section className="section-3">
          <Container>

            <section className="section-3-slider">
              <div className="toggleWrapper">
                <input type="checkbox" className="dn" id="dn"/>
                  <label htmlFor="dn" className="toggle">
                  {/* <span className="toggle__handler"> */}
                </label>
              </div>
              <div id="container">
                <div className="toggle">
                  <input onChange={toggleHandler} type="checkbox" name="toggle" className="check-checkbox" id="mytoggle" />
                  <label className="check-label" htmlFor="mytoggle">
                    <div id="background"></div>
                    <span className="face">
                      <span className="face-container">
                        <span className="eye left"></span>
                        <span className="eye right"></span>
                        <span className="mouth"></span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </section >
            {
              toggleSeriousness ?<div className="section-3-paragraph"> <h2 className="section-3__heading">Why is this website designed like this?</h2><br /> <span>Harry Potter is a likeable lad, so much so that <em className="emphasise">my childhood was filled
              with animated dreams of flying a broom</em> and leaving socks for Dobbie
              to be free. Say, my mum did give a queer look every so often...  <br />
              <br />
              Alas, it could not be. <em className="emphasise">Black hair and forehead scars were not given to 
              me</em>, but there shines a diamond in the cracks! <em className="emphasise">Magic, after all, is real</em>;
              how else do we explain having everything there is to know at a button&apos;s tap, 
              being able to tweet without being a bird, and <em className="emphasise">girls actually talking to me</em>
              (her name is Siri 💖)?<br />
              <br />
              It seems my dream to be Harry Potter is not lost, but <em className="emphasise">once you choose magic 
              there is no turning back</em> to the life once lived; so here is an introduction 
              to an aspiring Griffindore. <br />
              <br />
            </span> </div>: 
            <div className="section-3-paragraph"><h2 className="section-3__heading">Beware, if you are a geek there is trouble ahead!</h2> <br /><span>

              This site is filled with an <em className="emphasise"></em>obsessed nerd; it reeks of it with 
              his diligently articulated and revised <em className="emphasise">blogs</em>, the <em className="emphasise">games </em>
              and simple sites filled with unwanted boyish curiosity, ugh... <br />
              <br />
              My own eyes saw it, how all this popped up and sprouted from 
              inexperienced fingers a mere 6 months on this trip into the world 
              of code. <br />
              <br />
              Look for yourself at his github account, the unbreakable addict 
              likes <em className="emphasise">learning for a living</em>. If I was you I&apos;d turn this page in
              the chapter and skip the <em className="emphasise">passion-filled</em> goo he has to show. <br />
              <br />
              He also lives for books and sprinkles it everywhere he goes... You 
              have been warned.
            </span> </div>
            }
            
            
          </Container>

        </section>
      </body>
    </Layout>
  )
}