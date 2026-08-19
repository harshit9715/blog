import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
        <Layout>
            <div className={utilStyles.section} style={{ textAlign: 'center', padding: '6rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 className={utilStyles.heroTitle} style={{ marginBottom: '1rem' }}>
                    <span className="gradient-text">404</span>
                </h1>
                <h2 className={utilStyles.headingLg} style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                    Page Not Found
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '40ch' }}>
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <a className={utilStyles.buttonPrimary + ' ' + utilStyles.button}>
                        Go back home
                    </a>
                </Link>
            </div>
        </Layout>
    )
}