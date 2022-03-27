import Head from 'next/head'
import Layout from '../components/Layout'
import Project from '../components/Project'

export default function projects() {
    const tickerObject = {
        link: "https://tickerhack.netlify.app",
        title: "Ticker",
        alt: "ticker - a morning habit application",
        image: "Ticker2.png",
        description: "An app prototype to motivate good morning habits with a in-built timer and reward system with home-made character design",
    }

    const secondSiteObject = {
        link: "https://github.com/Anri-Lombard",
        title: "Second Personal Website",
        alt: "second personal website",
        image: "SecondSite.png",
        description: "A second personal website built with vuejs and sass",
    }

    const rocketObject = {
        link: "https://anri-lombard.itch.io/boost",
        title: "Rocket",
        alt: "rocket - a webGL game",
        image: "Rocket.png",
        description: "Rocket is a blacked-out space mission with the only objective of getting to the green landing pad",
    }

    const hulkSmashObject = {
        link: "https://anri-lombard.itch.io/hulk-smash",
        title: "Hulk Smash",
        alt: "Hulk-Smash - a block breaker",
        image: "HulkSmash.png",
        description: "A classic block-breaker game with a Hulky twist",
    }

    const simonObject = {
        link: "https://anri-lombard.itch.io/SimonGame",
        title: "Simon",
        alt: "Simon - a memorizing game",
        image: "Simon.png",
        description: "The ol' memorizing game modernized with some javascript code",
    }

    const covidSlayerObject = {
        link: "https://anri-lombard.github.io/SortTheRivalry/",
        title: "Covid-slayer",
        alt: "Covid-slayer: first javascript app",
        image: "CovidSlayer.png",
        description: "My very first javascript application built out of frustration of covid!",
    }
    const firstSiteObject = {
        link: "https://anri-lombard.github.io/MyFirstSite/",
        title: "First Website",
        alt: "My first website",
        image: "FirstSite.png",
        description: "The very first taste of what code could do at the start of 2021",
    }
    const drumKitObject = {
        link: "https://anri-lombard.itch.io/DrumKit/",
        title: "Drum Kit",
        alt: "Drum Kit - a simple music app",
        image: "DrumKit.png",
        description: "Another simple javascript app to make all your musical dreams come true",
    }

    return (
        <Layout>
                <Head>
                    <title>Projects</title>
                </Head>

                <div className="projects">
                    <div className="row row-cols-1 row-cols-md-2">
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
                        <div className="col" >
                            <Project project={drumKitObject}/>
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
                    </div>
                </div>
        </Layout>
    )
}