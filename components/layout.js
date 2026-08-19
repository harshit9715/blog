import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Harshit Gupta'
export const siteTitle = 'Harshit Gupta - Cloud Solutions Architect'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta
          name="description"
          content="Freelance Cloud Solutions Architect & Fractional CTO with 7+ years designing serverless, event-driven architectures for enterprise clients."
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Freelance Cloud Solutions Architect & Fractional CTO with 7+ years designing serverless, event-driven architectures for enterprise clients." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/55243567?s=400&u=24ed740afcb2eadb6c02fd4ed3debed0112d56c" />
        <meta property="og:url" content="https://portfolio-harshit9715.vercel.app/"></meta>
      </Head>
      {home ? (
        <header className={styles.header}>
          <h1 className={utilStyles.heroTitle}>
            <span className="gradient-text">{name}</span>
          </h1>
          <p className={styles.subtitle}>Site Reliability Engineer · Cloud Solutions Architect</p>
          <p className={styles.location}>📍 Hyderabad, India</p>
        </header>
      ) : (
        <div style={{ padding: '2rem 0' }}>
          <Link href="/">
            <a style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text)' }} className="no-underline">
              {name}
            </a>
          </Link>
        </div>
      )}
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