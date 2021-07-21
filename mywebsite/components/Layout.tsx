/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'
import React from 'react'
import {Button, Alert} from "react-bootstrap";
import MyNavbar from './MyNavbar'
import {Container} from 'react-bootstrap'

const name = "Anri Lombard"
export const siteTitle = 'Anri\'s personal website'

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {

    return (
        <html className={styles.container}>
            <Head>
                <link rel="shortcut icon" type="image/png" href="../public/favicon/apple-touch-icon.png" />
                <title>Paradise</title>
                <meta name="description" content="Anri Lombard's personal website" />
                <meta name="og:title" content={siteTitle} />

                
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </Head>

            <body>
                <MyNavbar />
                <Container>{children}</Container>
                <Container>
                    {!home && (
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>Back To Home</a>
                            </Link>
                        </div>
                    )}
                </Container>


                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

                <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin></script>
            </body>
            
        </html>
    )
}