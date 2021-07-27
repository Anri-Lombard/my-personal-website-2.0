import Layout from '../components/Layout'
import Head from 'next/head'
import Recogniton from '../components/Recognition'
import Recognition from '../components/Recognition';

export default function about() {
    const propsLayout = {
        title1: "Awards",
        body1: [[""]],
        title2: "Skills",
        body2: [["first", "elaboration"], ["second", "elaboration"]],
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