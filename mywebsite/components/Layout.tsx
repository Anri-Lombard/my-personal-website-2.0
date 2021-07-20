/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'
import React from 'react'
import {Button} from "react-bootstrap";

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

                # Bootstrap
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </Head>

            <body>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <Button>Hello</Button>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>Back To Home</a>
                        </Link>
                    </div>
                )}

                # Bootstrap
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

                # React Bootstrap
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin></script>

                <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></script>
            </body>
            
        </html>
    )
}