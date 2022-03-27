/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MyNavbar from './MyNavbar'
import {Container} from 'react-bootstrap'
import Footer from './Footer'

const name = "Anri Lombard"
export const siteTitle = 'Anri\'s personal website'

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {

    return (
        <html>
            <Head>
                <link rel="shortcut icon" type="image/png" href="../public/favicon/apple-touch-icon.png" />
                <title>Paradise</title>
                <meta name="description" content="Anri Lombard's personal website" />
                <meta name="og:title" content={siteTitle} />

                {/* Pure CSS */}
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"></link>

                {/* Bootstrap  */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

                {/* <!-- Google fonts --> */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet" /> */}

                {/* font awesome  */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>


                {/* Animate.js  */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            </Head>

            <body>
                <MyNavbar />
                <div id="main-content">{children}</div>
                <div>
                    {!home && (
                        <div className="backToHome">
                            <Link href="/">
                                <a>Back To Home</a>
                            </Link>
                        </div>
                    )}
                </div>
                <Footer />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
            </body>
            
        </html>
    )
}