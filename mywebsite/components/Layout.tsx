import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Sidebar from "./Sidebar"
import '@fontsource/roboto';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'tailwindcss/tailwind.css'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Anri Lombard's personal website</title>
            <meta name="description" content="Anri Lombard's personal website" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Sidebar />
        <main className={styles.main}>{children}</main>
    </>
  )
}