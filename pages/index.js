import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import ContainerTextFlip from '../components/ContainerTextFlip'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section */}
      <section className={utilStyles.hero}>
        <h2 className={utilStyles.heroSubtitle}>
          Building reliable{' '}
          <ContainerTextFlip 
            words={[
              "serverless systems",
              "cloud solutions",
              "aws infrastructure"
            ]}
            interval={3000}
            animationDuration={500}
            textClassName="gradient-text"
          />{' '}
          at scale.
        </h2>
        <p className={utilStyles.heroDescription}>
          Freelance Cloud Solutions Architect and Fractional CTO with 7+ years of experience designing and building serverless, event-driven, high-availability architectures for enterprise and Fortune-500-scale clients across retail/F&B, EdTech, InsurTech, and cybersecurity training.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link href="/work-life">
            <a className={utilStyles.buttonPrimary + ' ' + utilStyles.button}>
              View my work
            </a>
          </Link>
          <a href="https://www.linkedin.com/in/harshit9715/" target="_blank" rel="noopener noreferrer" className={utilStyles.button}>
            Get in touch
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className={utilStyles.section}>
        <div className={utilStyles.sectionLabel}>By the numbers</div>
        <h2 className={utilStyles.sectionTitle}>Impact that speaks</h2>
        <div className={utilStyles.statsGrid}>
          <div className={utilStyles.statCard}>
            <div className={utilStyles.statNumber}>7+</div>
            <div className={utilStyles.statLabel}>Years of experience</div>
          </div>
          <div className={utilStyles.statCard}>
            <div className={utilStyles.statNumber}>30M+</div>
            <div className={utilStyles.statLabel}>Requests/day at scale</div>
          </div>
          <div className={utilStyles.statCard}>
            <div className={utilStyles.statNumber}>80%</div>
            <div className={utilStyles.statLabel}>Cost reduction delivered</div>
          </div>
          <div className={utilStyles.statCard}>
            <div className={utilStyles.statNumber}>~99%</div>
            <div className={utilStyles.statLabel}>Production uptime</div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className={utilStyles.section}>
        <div className={utilStyles.sectionLabel}>Featured engagements</div>
        <h2 className={utilStyles.sectionTitle}>Where I've built things</h2>
        <p className={utilStyles.sectionDescription}>
          Selected client projects and engagements with Fortune-500 brands and startups.
        </p>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/work-life">
            <a className={utilStyles.link}>View complete project portfolio</a>
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      {allPostsData && allPostsData.length > 0 && (
        <section className={utilStyles.section}>
          <div className={utilStyles.sectionLabel}>Writing</div>
          <h2 className={utilStyles.sectionTitle}>Latest Posts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  )
}