/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Link from 'next/Link'
import React from 'react'
import MyNavbar from './MyNavbar'
import {Container} from 'react-bootstrap'

const name = "Anri Lombard"
export const siteTitle = 'Anri\'s personal website'

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {

    return (
        <html className="container">
            <Head>
                <link rel="shortcut icon" type="image/png" href="../public/favicon/apple-touch-icon.png" />
                <title>Paradise</title>
                <meta name="description" content="Anri Lombard's personal website" />
                <meta name="og:title" content={siteTitle} />

                {/* Pure CSS */}
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"></link>
            </Head>

            <body>
                <MyNavbar />
                <Container>{children}</Container>
                <Container>
                    {!home && (
                        <div className="backToHome">
                            <Link href="/">
                                <a>Back To Home</a>
                            </Link>
                        </div>
                    )}
                </Container>
            </body>
            
        </html>
    )
}