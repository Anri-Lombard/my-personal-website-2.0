import Layout from '../components/Layout'
import Head from 'next/head'
import Recogniton from '../components/Recognition'
import Recognition from '../components/Recognition';

export default function about() {
    const propsLayout = {
        title1: "Awards",
        body1: [["", "Keep in mind, this is not an exhaustive list, but highlights the most important characteristics of Anri"],["Top Mathematics Student in Namibia 2020", "He likes math."],["Windhoek High School salutatorian", "This is listed because Anri is not a talented student, so worked hard and smart. If Covid could get a move on some more of these would appear."],["NMO winner 2020", "Namibia Math Olympiad held in his senior year Nationwide"], ["NMO silver medalist 2019", "Namibia Math Olympiad held in his 11th year Nationwide"], ["ATKV Namibia Top Ten Speaker", "Anri does not only love math, but also language. He was exposed to Afrikaans, mostly, and went on to represent his school to get a top ten spot."], ["Elected Prefect At Primary And High School", "Anri is well versed in working with a team, managing large projects, and executing on responsibilies."]],
        title2: "Skills",
        body2: [["Languages", "Afrikaans and English - fluent"], ["Academic Proficiency", "Math, Physics, Computer Science, Statistics"], ["Programming Languages Well Understood", "C/C++, Java, Python, Javascript, HTML + CSS, C#"], ["Programming Environments Well Versed In", "Front-end web development (React, Vue, Next), Back-end development (Firebase, Nodejs, SQL), Game-development (Unity)"]],
        title3: "Education",
        body3: [["PioneersPark Primary School", "Grades 1-7"], ["Windhoek High School", "Grades 8-12"], ["University of Cape Town", "First Year"]]
    }
    return (
        <Layout>
            <div>
                <Head>
                    <title>Recognitions</title>
                </Head>

                <div className="recognitions">
                    <Recognition layout={propsLayout}/>
                </div>
            </div>
        </Layout>
    )
}