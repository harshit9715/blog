import Head from 'next/head'
import Link from 'next/link'
import { Chrono } from 'react-chrono';
import Date from '../../components/date'
import Layout, { siteTitle, name } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getWorkLifeContent} from '../../lib/life';

export async function getStaticProps() {

return {
        props: {
            lifedata: getWorkLifeContent()
        }
      }
}

export default function Home({ lifedata }) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>{name}</b>. I'm a software engineer and full stack web developer from Hyderabad, India. You can contact me on{' '}
          <a href='https://www.linkedin.com/in/harshit9715/'><span>LinkedIn</span></a></p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}

    
    
    <div style={{ height: "700px", width: '100%' }}>
    <h2 className={utilStyles.headingLg}>Timeline</h2>
            <Chrono
                slideShow
                items={lifedata}
                mode="VERTICAL_ALTERNATING"
            />
        </div>
        </Layout>
    </>
  )
}