import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Harshit'
export const siteTitle = 'Harshit\'s Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta
          name="description"
          content="Welcome to my profile, You can know all about me from here."
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Welcome to my profile, You can know all about me from here." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/55243567?s=400&u=24ed740afcb2eadb6c02fd4ed3debed0112d56c" />
        <meta property="og:url" content="https://portfolio-harshit9715.vercel.app/"></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img alt={name + '\'s picture'} src={require('../public/images/profile.jpg?resize&size=144')} className={utilStyles.borderCircle} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src={require('../public/images/profile.jpg?resize&size=144')} className={utilStyles.borderCircle} />
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
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}