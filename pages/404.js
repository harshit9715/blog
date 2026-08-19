import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
        <Layout>
            <div className={utilStyles.section} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h1 className={utilStyles.headingXl} style={{ marginBottom: '1rem' }}>404</h1>
                <h2 className={utilStyles.headingLg} style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>Page Not Found</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <a className={utilStyles.modernButton}>Go back home</a>
                </Link>
            </div>
        </Layout>
    )
}