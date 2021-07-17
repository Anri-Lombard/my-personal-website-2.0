import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'

const name = "Anri Lombard"
export const siteTitle = 'Anri\'s personal website'

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="shortcut icon" type="image/png" href="../public/favicon/apple-touch-icon.png" />
                <title>Paradise</title>
                <meta name="description" content="Anri Lombard's personal website" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back To Home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}