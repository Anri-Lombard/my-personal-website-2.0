import Layout from '../components/Layout'
import Head from 'next/head'
import Project from '../components/Project'

export default function projects() {
    const tickerObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    const secondSiteObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    const rocketObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    const hulkSmashObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    const simonObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    const covidSlayerObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }
    const firstSiteObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }
    const ucMeObject = {
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "Ticker all the way",
    }

    return (
        <Layout>
                <Head>
                    <title>Projects</title>
                </Head>

                <div className="projects">
                    <div className="row row-cols-lg-2 row-cols-sm-1">
                        <div className="col">
                            <Project project={tickerObject}/>
                        </div>
                        <div className="col">
                            <Project project={secondSiteObject}/>
                        </div>
                        <div className="col">
                            <Project project={rocketObject}/>
                        </div>
                        <div className="col">
                            <Project project={hulkSmashObject}/>
                        </div>
                        <div className="col">
                            <Project project={simonObject}/>
                        </div>
                        <div className="col">
                            <Project project={covidSlayerObject}/>
                        </div>
                        <div className="col">
                            <Project project={firstSiteObject}/>
                        </div>
                        <div className="col" >
                            <Project project={ucMeObject}/>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}