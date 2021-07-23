import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { GetStaticProps } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {useState} from 'react'

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
            <p>
              “Oh, you can’t help that,” said the Cat: “we’re all mad here. I’m mad. You’re mad.” 
              “How do you know I’m mad?” said Alice. “You must be,” said the Cat, or you wouldn’t 
              have come here.”

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
            You're welcome to
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
                <div className="bear-body">
                  <span className="eye left"></span>
                  <span className="eye right"></span>
                </div>
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
            </section>
            <div className="button-container-3">
              <span className="mas">MASK3</span>
            <button type="button" name="Hover">MASK3</button>
            </div>
            {
              toggleSeriousness ?<div> <h2 className="btn draw-border" style={{color: "white", textDecoration: "underline", textAlign: "center"}}>Why is this website designed like this:</h2><br /> <span>Harry Potter is a likeable lad, so much so that my childhood was filled
              with animated dreams of flying a broom and leaving socks for Dobbie
              to be free. Say, my mum did give a queer look every so often...  <br />
              <br />
              Alas, it could not be. Black hair and forehead scars were not given to 
              me, but there shines a diamond in the cracks! Magic, after all, is real;
              how else do we explain having everything there is to know at a button's tap, 
              being able to tweet without being a bird, and girls actually talking to me
              (her name is Siri 💖)?<br />
              <br />
              It seems my dream to be Harry Potter is not lost, but once you choose magic 
              there is no turning back to the life once lived; so here is an introduction 
              to an aspiring Griffindore. <br />
              <br />
            </span> </div>: 
            <div><h2 style={{color: "white", textDecoration: "underline", textAlign: "center"}}>Beware, if you are a geek there is trouble ahead!</h2> <br /><span>

              This site is filled with an obsessed nerd; it reeks of it with 
              his diligently articulated and revised blogs, the games
              and simple sites filled with unwanted boyish curiosity, ugh... <br />
              <br />
              My own eyes saw it, how all this popped up and sprouted from 
              inexperienced fingers a mere 6 months on this trip into the world 
              of code. <br />
              <br />
              Look for yourself at his github account, the unbreakable addict 
              likes learning for a living. If I was you I'd turn this page in
              the chapter and skip the passion-filled goo he has to show. <br />
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