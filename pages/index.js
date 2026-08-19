import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


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
      <section className={utilStyles.section}>
        <div className={utilStyles.headingMd}>
          <p>Hello, I'm <b>{name}</b>. I'm a software engineer and full stack web developer from Hyderabad, India.</p>
          <p style={{ marginTop: '1rem' }}>You can contact me on <a href='https://www.linkedin.com/in/harshit9715/'><span>LinkedIn</span></a></p>
        </div>
      </section>
      
      <section className={utilStyles.section}>
        <h2 className={utilStyles.headingLg}>Experience & Work-life</h2>
        <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
          Explore my professional journey and work experience. <Link href={`/work-life`}><a>View my work timeline →</a></Link>
        </p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.headingLg}>Latest Blog Posts</h2>
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
    </Layout>
  )
}